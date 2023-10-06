from django.db import models


class Subject(models.Model):
    subject = models.CharField(max_length=332, unique=True, db_index=True)
    title = models.CharField(max_length=332, default='Subject Title')
    skills = models.CharField(max_length=332, blank=True)
    description = models.TextField(blank=True)


class ContentURL(models.Model):
    subject_content = models.ForeignKey(Subject, on_delete=models.CASCADE, related_name='urls')
    title = models.CharField(default="Video", max_length=332)
    # url = models.CharField(default="rdwz7QiG0lk?si=_uI8RAN_tdMH8OCS", max_length=899)
    url = models.URLField()

    def __str__(self):
        return f"{self.subject_content} - {self.title} - {self.url}"

