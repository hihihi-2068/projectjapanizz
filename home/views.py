from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from .models import User
from .forms import RegistrationForm
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.hashers import make_password
# Create your views here.
def get_home(request) :
    if request.user.is_authenticated :
        return render(request,'home_out.html')
    else:
        return render(request , 'home_in.html')
def get_login(request) :
    
    if request.user.is_authenticated:
        return redirect ('/home')
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request,username=username,password=password)
        if user is not None :
            login(request,user)
            return redirect('/home')
        else:
            return render(request,'login.html',{'message':'username or password not true'})
    else:
        return render(request,'login.html')
def get_logout(request):
     logout(request)
     return HttpResponseRedirect('../home')

def get_forgotpassword(request):
    return render(request , 'forgotpassword.html')
def get_register(request):
    form = RegistrationForm()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        if len(password) < 8:
            return render(request, 'register.html',{'form': form, 'message': 'Password must be longer than 8 characters.'})
        try:
            User.objects.get(username=username) 
            return render(request, 'register.html',{'form': form, 'message': 'Username already exists.'})
        except User.DoesNotExist:
            try :
                User.objects.get(email=email)
                return render(request, 'register.html',{'form': form, 'message': 'Email already exists.'})
            except User.DoesNotExist:
                user = User(username=username, password=make_password(password), email=email)
                user.save()
                return redirect('/login')
    else:
        return render(request, 'register.html', {'form': form})

def get_characters(request):
    return render(request,'characters.html')

