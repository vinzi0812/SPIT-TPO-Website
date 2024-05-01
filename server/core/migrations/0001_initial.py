# Generated by Django 5.0.4 on 2024-04-30 01:04

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FiveYearData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('batch', models.IntegerField()),
                ('type', models.CharField(choices=[('Boys', 'Boys'), ('Girls', 'Girls'), ('Open', 'Open'), ('SC & ST', 'SC & ST'), ('OBC, NT & SBC', 'OBC, NT & SBC'), ('EBC & EWS', 'EBC & EWS')], max_length=50)),
                ('number', models.IntegerField()),
                ('category', models.CharField(choices=[('Placements', 'Placements'), ('Higher Studies', 'Higher Studies'), ('Entrepreneurship', 'Entrepreneurship'), ('Got Offer after 6 months', 'Got Offer after 6 months')], max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Summary',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=100)),
                ('role', models.CharField(max_length=100)),
                ('ctc', models.FloatField()),
                ('base', models.FloatField(blank=True, null=True)),
                ('stipend', models.FloatField(blank=True, null=True)),
                ('location', models.CharField(blank=True, max_length=100, null=True)),
                ('category', models.CharField(choices=[('Elite', 'Elite'), ('Super Dream', 'Super Dream'), ('Dream', 'Dream'), ('Normal', 'Normal')], max_length=50)),
                ('mode', models.CharField(choices=[('OnCampus', 'OnCampus'), ('OffCampus', 'OffCampus')], max_length=10)),
                ('offer_type', models.CharField(choices=[('I Only', 'I Only'), ('P Only', 'P Only'), ('I + P', 'I + P'), ('PPO', 'PPO')], max_length=10)),
                ('date', models.DateField(blank=True, null=True)),
                ('offers_received', models.IntegerField()),
                ('offers_accepted', models.IntegerField()),
            ],
        ),
    ]
