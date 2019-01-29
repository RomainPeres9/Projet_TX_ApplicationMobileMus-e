from rest_framework import viewsets, generics, status
from core.serializers import OeuvreSerializer, UserSerializer, NoteSerializer
from core.models import Oeuvre, Note, User
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.decorators import (api_view, renderer_classes)
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, Http404


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


    @action(detail=True, methods=['post'])
    def is_connected(self, request):
        print(request.data)
        return Response(True)


class OeuvreViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows oeuvres to be viewed or edited.
    """
    queryset = Oeuvre.objects.all()
    serializer_class = OeuvreSerializer

    def get_queryset(self):
        queryset = Oeuvre.objects.all()
        if self.request.query_params.get('query'):
            query = self.request.query_params.get('query')
            queryset = queryset.filter(title__icontains=query)
        return queryset


class NoteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows oeuvres to be viewed or edited.
    """
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


@api_view(['POST'])
@renderer_classes((JSONRenderer, ))
def is_connected(request,):
    """
    Endpoint qui permet d'envoyer la convention de partenariat par mail pour une perm
    d'id {id}.
    """
    print(request.data)
    if list(request.data.keys())[0] == 'email':
        print(User.objects.filter(email=request.data['email']).count())
        if User.objects.filter(email=request.data['email']).count() == 1:
            print(request.data['email'])
            user = User.objects.filter(email=request.data['email']).first()
            print(user)
            url = request.build_absolute_uri('/users/' + str(user.id) + '/')
            return Response({"url": url})
        else:
            raise Http404
    else:
        raise Http404

