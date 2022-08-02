from email import message
import http
from winreg import REG_BINARY
from django.contrib.auth import authenticate
from http.client import HTTPResponse
from django.contrib import messages
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from django.http import HttpResponse
from cmsapp.models import regform
from datetime import datetime
from django.contrib.auth import authenticate, login

def login(request):
    if request.method == "POST":
        email=request.POST['email']
        password=request.POST['password']
        if regform.objects.filter(email=email).exists():
            if regform.objects.filter(password=password).exists():    
                return render(request, "core/index.html")
            else:
                messages.error(request, "Incorrect password")
                return render(request, "core/login.html")
        else:
            messages.error(request, "Email doesn't exist")
            return render(request, "core/login.html")
    else:
        return render(request, 'core/login.html')

def form(request):
    if request.method=='POST':
        fname =request.POST['fname']
        Lname =request.POST['Lname']
        DOB =request.POST['DOB']
        email=request.POST['email']
        password=request.POST['password']
        username=request.POST['username']

        if regform.objects.filter(email=email).exists():
            messages.info(request, 'Email is already taken')
            return render(request,'core/reg.html')
        else:
            user= regform.objects.create(firstName=fname,lastName=Lname,username=username,email=email,password=password,DOB=DOB)
            user.save()
            return render(request, 'core/login.html')
    else:
        return render(request, 'core/reg.html')


def catalog(request):
    return render(request, "core/index.html")

def cc(request):
    return render(request, "core/cc.html")

def co(request):
    return render(request, "core/co.html")

def update(request):
    return render(request, "core/update.html")