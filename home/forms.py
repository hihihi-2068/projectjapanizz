from django import forms
from django.contrib.auth.hashers import make_password
from .models import User

class RegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput(attrs={'id': 'password'}))

    class Meta:
        model = User
        fields = ['username', 'password', 'email']
        widgets = {
            'username': forms.TextInput(attrs={'id': 'username'}),
            'password': forms.TextInput(attrs={'id': 'password'}),
            'email': forms.EmailInput(attrs={'id': 'email'}),
        }
        labels = {None
        }

    def save(self, commit=True):
        user = super(RegistrationForm, self).save(commit=False)
        user.password = make_password(self.cleaned_data['password'])
        if commit:
            user.save()
        return user
