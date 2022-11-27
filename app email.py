from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)
mail= Mail(app)

app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'thomas.kitaba@gmail.com'
app.config['MAIL_PASSWORD'] = 'rmiubtbgjsxscycd'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)
@app.route("/", methods=["GET", "POST"]) #type: ignore
def index():
  if request.method =="POST":
    msg = Message('tom-diary', sender = 'thomas.kitaba@gmail.com', recipients = ['thomas.kitaba@gmail.com'])
    msg.body = "sign in to tom-diary where you can write diffrent part of your life in one book--- "
    mail.send(msg)
    return render_template("experiment.html", cat_1="Success")
  if request.method == "GET":
    return render_template("experiment.html")


if __name__ == '__main__':
  app.run(debug = True)
  
                                                          