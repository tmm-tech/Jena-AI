from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Jena Backend")
