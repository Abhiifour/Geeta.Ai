from flask import Flask , request , jsonify
import os
from embedchain import App
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin

load_dotenv()

my_secret_key = os.getenv("SECRET_KEY")


os.environ["OPENAI_API_KEY"] = 

bot = App()


app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


    
@app.route('/api', methods=['POST'])
@cross_origin()
def api():
    request_data = request.get_json()
    data = request_data['query']
    ans = bot.query(data,citations=False)

    return ans
   
   
    
    
   
@app.route('/')
def home():
    return "<p>Hello, abhishek!</p>"
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000, debug=True)












