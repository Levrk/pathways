# Generated by Django 4.1.7 on 2023-03-07 23:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0010_alter_image_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='path',
            name='image',
            field=models.ImageField(default='pathways/files/images/blank.png', upload_to='files/images'),
        ),
    ]