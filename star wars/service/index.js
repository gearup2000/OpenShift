const http = require('http')

const port = 3000

const quotes = [
	    "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
        "Do or do not. There is no try.",
        "Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is.",
        "In a dark place we find ourselves, and a little more knowledge lights our way.",
        "Train yourself to let go of everything you fear to lose.",
        "Always pass on what you have learned.",
        "Truly wonderful the mind of a child is.",
        "Feel the Force!",
]

const requestHandler = (_request, response) => {
    response.end(quotes[Math.floor(Math.random() * quotes.length)])
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
	
    if (err) {
        return console.log('Trouble, there is. Wrong, something went.', err)
	}
	
	console.log(`The server is online. Port you seek, ready it is. ${port}`)

})
