from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import Subject, ContentURL
from .serializers import SubjectSerializer, ContentURLSerializer

class SubjectContentTests(TestCase):
    def setUp(self):
        self.client = APIClient()

        # Create a Subject for testing
        self.subject = Subject.objects.create(
            subject='test-subject',
            skills='test-skills',
            description='test-description'
        )

        # Create a ContentURL for the subject
        self.content_url = ContentURL.objects.create(
            subject_content=self.subject,
            title='Test Video',
            url='https://example.com/test-video'
        )

    def test_subject_content_detail(self):
        url = reverse('subject-content-detail', args=[self.subject.subject])
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[str(self.subject.subject)]['subject'], self.subject.subject)
        self.assertEqual(response.data[str(self.subject.subject)]['skills'], self.subject.skills)
        self.assertEqual(response.data[str(self.subject.subject)]['description'], self.subject.description)

        # Check if the ContentURL is serialized correctly
        self.assertEqual(response.data[str(self.subject.subject)]['urls'][0]['title'], self.content_url.title)
        self.assertEqual(response.data[str(self.subject.subject)]['urls'][0]['url'], self.content_url.url)

    # Add more test cases as needed

