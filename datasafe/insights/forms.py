from django import forms
from .models import CustomUser
from django.contrib.auth import get_user_model


class EditUserInfoForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['bio', 'links', 'username']

    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user.save()
        return user