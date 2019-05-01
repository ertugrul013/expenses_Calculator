import sys
import argparse
import json
import pprint
#from calculations import Calculator as cal


with open("taxes.json", "r") as read_file:
    data = json.load(read_file)

pp = pprint.PrettyPrinter(indent=4) 
pp.pprint(data["Municipaltaxes"])
print(data["Municipaltaxes"][0]["Noord-Brabant"]["First_dog"])
print(len(data))    