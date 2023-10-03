from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import openai


app = Flask(__name__)
CORS(app)

openai.api_key = "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"
current_cpi_value = "6.3"

@app.route('/')
def home():
    return "hello"

@app.route('/api/cpi/current')
def current_cpi():
    return current_cpi_value

@app.route('/api/cpi/test', methods=['GET'])
def test_cpi():
    user_input = float(request.args.get('user_input'))
    result = value * value
    response = {
        'user_input': user_input,
        'result': result
    }
    return jsonify(response), 200

@app.route('/api/cpi/process', methods=['GET', 'POST'])
def process_cpi():
    req = request.json
    expenditure_input = req["expenditure"] 
    cpi_input = req['cpi']
    print("Results...")
    print(expenditure_input, cpi_input)
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
  {
    "role": "user",
    "content": f"In the UK, given a household's weekly expenditure is £{expenditure_input} and the CPI is currently {current_cpi_value}, use publicly available historical data to predict the household weekly expenditure if CPI changes to {cpi_input}%, please just give me the weekly expenditureç and none of the working out, I just want a whole number"
  }
],
        temperature=0,
        max_tokens=512
    )

    return jsonify(response), 200

@app.route('/api/cpi/process_old', methods=['GET', 'POST'])
def process_cpi_old():
    expenditure_input = request.args.get('expenditure')
    cpi_input = request.args.get('cpi')
    
    prompt = f"Given a household's current weekly expenditure of £{expenditure_input} and UK CPI of 6%, use publically available historical data to predict the household expenditure if CPI changes to {cpi_input}%. Dont give a working, just give a number value" 

    query = openai.Completion.create(
	    model="gpt-3.5-turbo-instruct",
		prompt=prompt,
		max_tokens=1024,
		temperature=0
	)	
    response = query.choices[0].text
    print(prompt)
  
    return jsonify(response), 200


if __name__ == '__main__':
    app.run(port=5000)
