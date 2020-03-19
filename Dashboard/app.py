from flask import Flask, jsonify, json
app = Flask(__name__)



@app.route("/LosAngeles/Inspection")

def index():
    with open('total.json') as f:
        data = json.load(f)
    return jsonify(data)




if __name__ == "__main__":
    app.run(debug=True)