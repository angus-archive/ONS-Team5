from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

current_cpi_value = "6.3"

@app.route('/')
def home():
    return "hello"

@app.route('/api/cpi/current')
def current_cpi():
    return current_cpi_value

@app.route('/api/cpi/process', methods=['GET'])
def process_cpi():
    value = float(request.args.get('value'))
    return current_cpi_value + value

if __name__ == '__main__':
    app.run(port=5002)
