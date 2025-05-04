from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def grafo(request):
    return render(request, 'grafo.html')
