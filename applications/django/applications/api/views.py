from django.conf import settings
from django.shortcuts import render

import pandas as pd

from rest_framework.views import APIView
from rest_framework.response import Response

import asyncio
import websockets
import json
from datetime import datetime, timezone

from threading import Thread
from django.http import JsonResponse


class EA19(APIView):
    '''ea19_macro.xlsx API'''
    def get(self, request):
        self.data = pd.read_csv(f'./static/database/ea19_macro.csv').fillna(value='null')
        return Response(self.data.to_dict(orient='records'))


class MapGeo(APIView):
    '''FoodMap.xlsx API'''
    def get(self, request):
        self.data = pd.read_excel(f'./static/database/Map.xlsx').fillna(value='null')
        return Response(self.data.to_dict(orient='records'))


class Test_Table(APIView):
    '''Demonstration of API 01'''
    def get(self, request):
        self.data = pd.read_excel(f'./static/database/data.xlsx').fillna(value='null')
        return Response(self.data.to_dict(orient='records'))

class Test_FactGenerator(APIView):
    '''Demonstration of API 02'''
    def get(self, request):
        self.data = pd.read_json(f'./static/database/FactGenerator.json')
        return Response(self.data.to_dict(orient='records'))


async def connect_ais_stream(callback):

    async with websockets.connect("wss://stream.aisstream.io/v0/stream") as websocket:
        subscribe_message = {"APIKey": settings.AIS_STREAM, "BoundingBoxes": [[[-90, -180], [90, 180]]]}

        subscribe_message_json = json.dumps(subscribe_message)
        await websocket.send(subscribe_message_json)

        async for message_json in websocket:
            message = json.loads(message_json)
            message_type = message["MessageType"]

            if message_type == "PositionReport":
                ais_message = message['Message']['PositionReport']
                await callback(ais_message)

if __name__ == "__main__":
    asyncio.run(asyncio.run(connect_ais_stream()))

# In-memory data store
ais_data = []

# Callback function to handle AIS messages
async def ais_callback(ais_message):
    ais_data.append({
        'timestamp': str(datetime.now(timezone.utc)),
        'ship_id': ais_message['UserID'],
        'latitude': ais_message['Latitude'],
        'longitude': ais_message['Longitude'],
    })

    # Sleep if 100 ship IDs have been collected
    if len(ais_data) >= 2000:
        await asyncio.sleep(delay= 60*10)

# Start the WebSocket connection in a separate thread
def start_ais_stream():
    t = Thread(target=lambda: asyncio.run(connect_ais_stream(ais_callback)))
    t.daemon = True
    t.start()

start_ais_stream()

# Django view to access AIS data
def get_ais_data(request):
    return JsonResponse(ais_data, safe=False)

