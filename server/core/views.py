from django.shortcuts import render
#import Response
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import FiveYearData, Summary, StudentDetails
import time
import openpyxl

# Create your views here.
class DashBoardView(APIView):
    def get(self, request):
        # put_data_to_db()
        summary = Summary.objects.all()
        #calculate average ctc
        total_ctc = 0
        total_offers = 0
        for s in summary:
            total_ctc += s.ctc * s.offers_accepted
            total_offers += s.offers_accepted
        #calculate median ctc
        ctc_list = []
        companies = []
        no_companies = 0
        for s in summary:
            if s.company_name not in companies:
                companies.append(s.company_name)
            for i in range(s.offers_accepted):
                ctc_list.append(s.ctc)
        ctc_list.sort()
        n = len(ctc_list)
        average_ctc = total_ctc / n
        if n % 2 == 0:
            median_ctc = (ctc_list[n//2] + ctc_list[n//2 - 1]) / 2
        else:
            median_ctc = ctc_list[n//2]
        st = StudentDetails.objects.get(year=time.localtime().tm_year)
        placement_percentage = st.placed / st.students * 100,
        #get unique companies
        no_companies = len(companies)
        no_roles = len(summary)
        current_year = StudentDetails.objects.get(year=time.localtime().tm_year)
        #convert to json
        current_year = {
            'year': current_year.year,
            'students': current_year.students,
            'placed': current_year.placed,
            'elite': current_year.elite,
            'super_dream': current_year.super_dream,
            'normal': current_year.normal,
            'dream': current_year.dream,
            'ineligible': current_year.ineligible,
            'higher_studies': current_year.higher_studies,
            'unplaced': current_year.unplaced
        }
                
        return Response({
            'average_ctc': average_ctc.__round__(2),
            'median_ctc': median_ctc.__round__(2),
            'placement_percentage': placement_percentage[0].__round__(2),
            'companies': no_companies,
            'roles': no_roles,
            'current_year': current_year
        }, status=status.HTTP_200_OK)    
            
