from django.contrib import admin
from .models import Subject, ContentURL


class ContentURLInline(admin.StackedInline):
    model = ContentURL
    extra = 1  # Number of inline forms to show


@admin.register(Subject)
class SubjectContentAdmin(admin.ModelAdmin):
    list_display = ['subject', 'skills', 'description']
    inlines = [ContentURLInline]

    def change_view(self, request, object_id, form_url='', extra_context=None):
        extra_context = extra_context or {}
        subject_content = Subject.objects.get(pk=object_id)
        extra_context['title'] = str(subject_content)
        return super().change_view(request, object_id, form_url, extra_context=extra_context)

