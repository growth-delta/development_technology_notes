from rest_framework import serializers
from .models import Subject, ContentURL


class ContentURLSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentURL
        fields = '__all__'


class SubjectSerializer(serializers.ModelSerializer):
    urls = ContentURLSerializer(many=True, read_only=True)
    class Meta:
        model = Subject
        fields = '__all__'

