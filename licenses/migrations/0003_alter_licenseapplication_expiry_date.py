# Generated by Django 4.2.2 on 2023-06-29 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('licenses', '0002_alter_licensetype_price_licenseapplication'),
    ]

    operations = [
        migrations.AlterField(
            model_name='licenseapplication',
            name='expiry_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
