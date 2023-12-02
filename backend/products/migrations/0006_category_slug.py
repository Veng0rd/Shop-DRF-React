# Generated by Django 4.2.7 on 2023-12-02 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_remove_category_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='slug',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='Slug категории'),
        ),
    ]
