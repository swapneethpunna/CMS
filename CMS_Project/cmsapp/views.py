from email import message
import http
from http.client import HTTPResponse
from django.contrib import messages
from django.shortcuts import redirect, render
from django.contrib.auth.models import User, auth
from django.http import HttpResponse
from cmsapp.models import regform
from datetime import datetime


def form(request):
    if request.method=='POST':
        fname =request.POST['fname']
        Lname =request.POST['Lname']
        DOB =request.POST['DOB']
        email=request.POST['email']
        password=request.POST['password']
        username=request.POST['username']
        
        # print('User_created')
        
        if regform.objects.filter(email=email).exists():
            messages.info(request, 'Email is already taken')
            return render(request,'core/reg.html')
        else:
            user= regform.objects.create(firstName=fname,lastName=Lname,username=username,email=email,password=password,DOB=DOB)
            user.save()
            return render(request, 'core/login.html')
    else:
        return render(request, 'core/reg.html')

