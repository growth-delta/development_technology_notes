from django.db import models


class Subject(models.Model):
    subject = models.CharField(max_length=33, unique=True, db_index=True)
    title = models.CharField(max_length=899, default=subject)
    skills = models.CharField(max_length=899)
    description = models.TextField()


class ContentURL(models.Model):
    subject_content = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='urls')
    title = models.CharField(default="Subject Video", max_length=33)
    url = models.URLField()

    def __str__(self):
        return f"{self.subject_content} - {self.title} - {self.url}"

