from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Subject
from .serializers import SubjectSerializer


@api_view(['GET'])
def list_all_subjects(request):
    subjects = Subject.objects.all()
    serializer = SubjectSerializer(subjects, many=True, context={'request': request})
    return Response(serializer.data)


@api_view(['GET'])
def subject_content_detail(request, subject_slug):
    subject_instance = get_object_or_404(Subject, subject=subject_slug)
    serializer_subject = SubjectSerializer(subject_instance, context={'request': request})

    response_data = {
        str(subject_instance.subject): serializer_subject.data,
    }

    return Response(response_data)

