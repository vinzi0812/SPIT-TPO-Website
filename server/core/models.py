from django.db import models

# Create your models here.
class Summary(models.Model):
    company_name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, blank=True, null=True)
    ctc = models.FloatField()
    base = models.FloatField(blank=True, null=True)
    stipend = models.FloatField(blank=True, null=True)
    location = models.CharField(max_length=100, blank=True, null=True)
    CATEGORY_CHOICES = [
        ('Elite', 'Elite'),
        ('Super Dream', 'Super Dream'),
        ('Dream', 'Dream'),
        ('Normal', 'Normal'),
    ]
    MODE_CHOICES = [
        ('OnCampus', 'OnCampus'),
        ('OffCampus', 'OffCampus'),
    ]
    OFFER_TYPE_CHOICES = [
        ('I Only', 'I Only'),
        ('P Only', 'P Only'),
        ('I + P', 'I + P'),
        ('PPO', 'PPO'),
    ]
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    mode = models.CharField(max_length=10, choices=MODE_CHOICES)
    offer_type = models.CharField(max_length=10, choices=OFFER_TYPE_CHOICES)
    date = models.DateField(blank=True, null=True)
    offers_received = models.IntegerField()
    offers_accepted = models.IntegerField()
    
    def __str__(self):
        return self.company_name + ' - ' + (self.role if self.role else '')

class FiveYearData(models.Model):
    TYPE_CHOICES = [
        ('Boys', 'Boys'),
        ('Girls', 'Girls'),
        ('Open', 'Open'),
        ('SC & ST', 'SC & ST'),
        ('OBC, NT & SBC', 'OBC, NT & SBC'),
        ('EBC & EWS', 'EBC & EWS'),
    ]
    CATEGORY_CHOICES = [
        ('Placements', 'Placements'),
        ('Higher Studies', 'Higher Studies'),
        ('Entrepreneurship', 'Entrepreneurship'),
        ('Got Offer after 6 months', 'Got Offer after 6 months'),
    ]
    batch = models.IntegerField()
    type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    number = models.IntegerField()
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    
    def __str__(self):
        return str(self.batch) + ' - ' + self.type + ' - ' + self.category
    
class StudentDetails(models.Model):
    year = models.IntegerField()
    students = models.IntegerField()
    placed = models.IntegerField()
    elite = models.IntegerField()
    super_dream = models.IntegerField()
    dream = models.IntegerField()
    normal = models.IntegerField()
    higher_studies = models.IntegerField()
    ineligible = models.IntegerField()
    unplaced = models.IntegerField()
    
    def __str__(self):
        return str(self.year)
    