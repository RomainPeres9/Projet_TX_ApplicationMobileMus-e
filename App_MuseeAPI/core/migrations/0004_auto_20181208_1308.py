# Generated by Django 2.0 on 2018-12-08 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_oeuvre_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='oeuvre',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='photos'),
        ),
    ]