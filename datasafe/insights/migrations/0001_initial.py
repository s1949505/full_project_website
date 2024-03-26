# Generated by Django 5.0.2 on 2024-03-21 15:23

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Datacard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dataset_name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('motivation', models.TextField()),
                ('dataset_accessibility', models.CharField(max_length=100)),
                ('accessibility_info', models.TextField()),
                ('research_motivation', models.TextField()),
                ('authors', models.TextField()),
                ('contributors', models.TextField()),
                ('funding_type', models.CharField(max_length=100)),
                ('funding_info', models.TextField()),
                ('is_combination', models.BooleanField(default=False)),
                ('combination_info', models.TextField(blank=True, null=True)),
                ('date_created', models.DateField(blank=True, null=True)),
                ('version', models.CharField(max_length=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]