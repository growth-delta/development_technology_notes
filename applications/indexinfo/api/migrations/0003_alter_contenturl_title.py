# Generated by Django 4.2.5 on 2023-10-02 20:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_contenturl_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contenturl',
            name='title',
            field=models.TextField(default='Subject Video', max_length=33),
        ),
    ]
