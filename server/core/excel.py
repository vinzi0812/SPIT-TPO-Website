#put data from excel to database
import openpyxl
from models import Summary
def put_data_to_db():
    # Open the workbook
    wb = openpyxl.load_workbook("data.xlsx")
    sheet = wb["Sheet1"]
    # Get the column names
    columns = [cell.value for cell in sheet[1]]
    # Get the data
    data = []
    #start from the second row
    for row in sheet.iter_rows(min_row=2, values_only=True):
        # print(row)
        data.append({columns[i]: row[i] for i in range(len(columns))})
        # print(data)
    
    for row in data:
        obj = Summary(company_name = data.name, role = data.role, ctc = data.ctc, base = data.base, stipend = data.stipend, location = data.location, category = data.category, mode = data.mode, offer_type = data.offer_type, date = data.date, offers_received = int(data.offers_received), offers_accepted = int(data.offers_accepted))
        obj.save()
    # Put the data into the database
    # for row in data:
        # Create a new object of the model
        # obj = table_name()
        # # Set the attributes of the object
        # for key, value in row.items():
        #     setattr(obj, key, value)
        # # Save the object
        # obj.save()
    # Close the workbook
    wb.close()
    
put_data_to_db()