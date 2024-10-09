from flask import Flask,render_template

app = Flask(__name__)
app.config.from_pyfile("../config.py")
app.app_context().push()


@app.route('/')
def homeV():
    # return "Hello, World!, new way"
    #return render_template('layouts/navbar/navbar.html')
    return render_template('visitors/visitors.html')
    #return render_template('layouts/footer/footer.html')
    #return render_template('visitors/test.html')


# @app.route('navbar')
# def navV():
#     return render_template('layouts/navbar/navbar.html')
