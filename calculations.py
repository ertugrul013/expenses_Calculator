import json

class Calculator():
    with open("taxes.json", "r") as read_file:
        taxes_data = json.load(read_file)
    
    print(taxes_data["Municipaltaxes"][0]["Noord-Brabant"]["First_dog"])
    "" ""
    def MunicipalTaxes(self):
        return(12 + 12 + 15)
    
