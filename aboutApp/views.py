from django.shortcuts import render
from .models import Company, DevelopmentHistory
# Create your views here.
def about(request):

    companys = Company.objects.all()
    developmentHistorys = DevelopmentHistory.objects.all()
    return render(request, 'about.html', {
        'companys': companys,
        'developmentHistorys': developmentHistorys
    })