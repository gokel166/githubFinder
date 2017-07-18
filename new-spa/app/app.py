from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/hello")
def index():
    return "Welcome to the Flask App!"

@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        valOne = int(request.form.get['first'])
        valTwo = int(request.form.get['second'])
        total = valOne + valTwo
        data = {"total": str(total)}
        return jsonify(data), 500
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)