# Generated by Django 5.0.4 on 2024-04-30 02:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_studentdetails'),
    ]

    operations = [
        migrations.AlterField(
            model_name='summary',
            name='role',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
