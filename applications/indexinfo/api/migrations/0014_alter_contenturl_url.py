# Generated by Django 4.2.5 on 2023-10-03 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_alter_contenturl_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contenturl',
            name='url',
            field=models.URLField(),
        ),
    ]