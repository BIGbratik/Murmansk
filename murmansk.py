from flask import Flask, render_template, request, make_response
from flask_cors import CORS
import json
import psycopg2

app = Flask(__name__)
CORS(app)


def getData(name):
   file1=open("./data/"+name+".txt","r",encoding='utf-8')
   data_res=[]
   while True:
      line=file1.readline()
      if not line:
         break
      else:
         split_line=line.split('|')
         if len(split_line)==4:
            data_res.append({"Coordinate1":split_line[0], 
            "Coordinate2":split_line[1],
            "Name":split_line[2],
            "Extra":split_line[3]})
         else:
            data_res.append({"Coordinate1":split_line[0], 
            "Coordinate2":split_line[1],
            "Name":split_line[2],
            "Extra":""})
   file1.close()
   return data_res

def checkKey(key):
   file1=open("./data/keys.txt","r",encoding='utf-8')
   res=0
   while True:
      line=file1.readline()
      if not line:
         break
      else:
         if line==key:
            res=1
   return res

def addObject(data):
   file=open("./data/"+data["File"]+".txt","a",encoding='utf-8')
   if data["Extra"]!="":
      file.write("\n"+data["Coordinate1"]+"|"+data["Coordinate2"]+"|"+data["Name"]+"|"+data["Extra"]+"\n")
   else:
      file.write("\n"+data["Coordinate1"]+"|"+data["Coordinate2"]+"|"+data["Name"]+"\n")

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/bioSocCS')
def bio():
   return render_template('bioSocCS.html')

@app.route('/harkPOO')
def hark():
   return render_template('harkPOO.html')

@app.route('/istochnikCS')
def ist():
   return render_template('istochnikCS.html')

@app.route('/obshCS')
def obsh():
   return render_template('obshCS.html')
   
@app.route('/orgTec')
def org():
   return render_template('orgTec.html')

@app.route('/pokazateli')
def pokaz():
   return render_template('pokazateli.html')

@app.route('/pooCS')
def poo():
   return render_template('pooCS.html')

@app.route('/riskNatCS')
def risk():
   return render_template('riskNatCS.html')

@app.route('/objects',methods=['GET'])
def search():
    query = request.args.get('query')
    if query and query != '':
        return json.dumps(getData(query))
    else:
        return json.dumps('Не введен запрос!')

@app.route('/auth', methods=['POST'])
def key():
   key=request.get_json(force=False, silent=False, cache=False)
   return json.dumps(checkKey(key))

@app.route('/add', methods=['POST'])
def add():
   add_data=request.get_json(force=False, silent=False, cache=False)
   addObject(add_data)
   return make_response('Данные успешно записаны', 200)


if __name__ == "__main__":
    app.run(debug=True)
    