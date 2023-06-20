from typing import Iterable, Optional
from django.db import models


class Major(models.Model):
    name = models.CharField(max_length=100, verbose_name="Major Name")

    def __str__(self):
        return self.name


class Student(models.Model):
    student_id = models.BigIntegerField(
        primary_key=True, auto_created=True, verbose_name="Student ID", editable=True)
    first_name = models.CharField(max_length=100, verbose_name="First Name")
    last_name = models.CharField(max_length=100, verbose_name="Last Name")
    yearly_average = models.FloatField(verbose_name="Yearly Average")
    percentage = models.FloatField(editable=False, auto_created=True)
    major = models.ForeignKey(Major, on_delete=models.CASCADE)

    def save(self, force_insert: bool = ..., force_update: bool = ..., using: str | None = ..., update_fields: Iterable[str] | None = ...) -> None:
        self.percentage = round(self.yearly_average * 5, 2)
        return super().save()

    def __str__(self):
        return (f"{self.first_name} {self.last_name}")


class Card(models.Model):
    card_number = models.CharField(max_length=200, verbose_name="Card Number")
    card_date = models.CharField(
        max_length=200, verbose_name="Expiration Date")
    card_cvv = models.CharField(max_length=100, verbose_name="CVV")
