from django.shortcuts import render

from .models import Contact, ContactMethod, TalentConcept, AddUsAdmin

from pyquery import PyQuery as pq
# Create your views here.

def contact(request):
    contacts = Contact.objects.all()
    contactMethods = ContactMethod.objects.all()
    talentConcepts = TalentConcept.objects.all()
    jobs = AddUsAdmin.objects.all().order_by('-publishDate')
    for job in jobs:
        html = pq(job.content)
        job.content = pq(html).text()
    return render(request, 'contact.html', {
        "contacts": contacts,
        "contactMethods": contactMethods,
        "talentConcepts": talentConcepts,
        "jobs": jobs,
    })