function generateHtml(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Team Generator</title>
    </head>
    
    <body>
        <div class="row">
            <div class="col12">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Jared</span>
                        <span>Manager</span>
                        <hr>
                        <p>ID: 1</p>
                        <hr>
                        <p>Email: <a href="#">jared@fakemail.com</a></p>
                        <hr>
                        <p>Office number: 1</p>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Alec</span>
                        <span>Engineer</span>
                        <hr>
                        <p>ID: 2</p>
                        <hr>
                        <p>Email: <a href="#">alec@fakemail.com</a></p>
                        <hr>
                        <p>GitHub: <a href="#">ibealec</a></p>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Grace</span>
                        <span>Engineer</span>
                        <hr>
                        <p>ID: 3</p>
                        <hr>
                        <p>Email: <a href="#">grace@fakemail.com</a></p>
                        <hr>
                        <p>GitHub: <a href="#">gchoi2u</a></p>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Tammer</span>
                        <span>Engineer</span>
                        <hr>
                        <p>ID: 4</p>
                        <hr>
                        <p>Email: <a href="#">tammer@fakemail.com</a></p>
                        <hr>
                        <p>GitHub: <a href="#">tammerg</a></p>
                    </div>
                </div>
            </div>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">John</span>
                        <span>Intern</span>
                        <hr>
                        <p>ID: 5</p>
                        <hr>
                        <p>Email: <a href="#">john@fakemail.com</a></p>
                        <hr>
                        <p>School: 2University</p>
                    </div>
                </div>
            </div>
        </div>
    
    </body>
    
    </html>`
}

module.exports = generateHtml;