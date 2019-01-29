from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.


class User(models.Model):
    SEXE_CHOICES = (
        ('HOMME', 'Homme'),
        ('FEMME', 'Femme'),
    )

    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.CharField(max_length=100, unique=True)
    age = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(100)], blank=True, null=True)
    sexe = models.CharField(max_length=30, blank=True, null=True, choices=SEXE_CHOICES, default='HOMME')

    def __str__(self):
        return str(self.prenom) + ' ' + str(self.nom)


class Oeuvre(models.Model):
    title = models.CharField(max_length=100)
    artiste = models.CharField(max_length=100, blank=True, null=True)
    materiel = models.CharField(max_length=100, blank=True, null=True)
    theme = models.CharField(max_length=50, blank=True, null=True)
    date = models.CharField(max_length=20, blank=True, null=True)
    photo = models.ImageField(upload_to="photos", null=True, blank=True)

    def __str__(self):
        return str(self.title)


class Note(models.Model):
    valeur = models.IntegerField(validators=[MinValueValidator(0), MaxValueValidator(5)])
    oeuvre = models.ForeignKey('Oeuvre', on_delete=models.CASCADE)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
