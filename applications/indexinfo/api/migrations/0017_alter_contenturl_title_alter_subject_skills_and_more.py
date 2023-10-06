# Generated by Django 4.2.5 on 2023-10-05 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_alter_contenturl_title_alter_subject_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contenturl',
            name='title',
            field=models.CharField(default='Video', max_length=332),
        ),
        migrations.AlterField(
            model_name='subject',
            name='skills',
            field=models.CharField(blank=True, max_length=332),
        ),
        migrations.AlterField(
            model_name='subject',
            name='subject',
            field=models.CharField(db_index=True, max_length=332, unique=True),
        ),
        migrations.AlterField(
            model_name='subject',
            name='title',
            field=models.CharField(default='Subject Title', max_length=332),
        ),
    ]