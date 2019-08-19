import json

class Calculator():
    with open("taxes.json", "r") as read_file:
        taxes_data = json.load(read_file)
    
    def MunicipalTaxes(self,provinces):

        waste = self.taxes_data["Municipaltaxes"][provinces]["waste_charges_single"] / 12



        return(waste + 12 + 15)
    
