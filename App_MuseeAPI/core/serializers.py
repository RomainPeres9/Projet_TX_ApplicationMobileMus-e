from rest_framework import serializers
from core.models import Oeuvre, Note, User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'nom', 'prenom', 'email', 'age', 'sexe')


class OeuvreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Oeuvre
        fields = '__all__'


class NoteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
