# Generated by Django 5.0.2 on 2024-03-29 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('insights', '0002_datacard_additional_information_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='datacard',
            name='identifier',
            field=models.CharField(blank=True, max_length=400),
        ),
    ]
