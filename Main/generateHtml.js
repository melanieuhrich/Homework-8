function generateHtml(cardHTML) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <title>Team Generator</title>
    </head>
    
    <body>
        <div class="row">
            <div class="col12">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="row">
           ${cardHTML}
        </div>
    
    </body>
    
    </html>`
}

module.exports = generateHtml;