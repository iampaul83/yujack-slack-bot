require('dotenv').config()
if (!process.env.TOKEN) {
    throw new Error('missing required env: TOKEN')
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    if (req.body.token !== process.env.TOKEN) {
        return res.json({
            text: 'Oops, you come from the wrong place'
        })
    }
    next()
})

app.post('/test', (req, res, next) => {    
    console.log(req.body);
    console.log(`User    :  ${req.body.user_name}`);
    console.log(`Text    :  ${req.body.text}`);
    console.log(`Command :  ${req.body.command}`);
                                       
    return res.json({
        text: 'Command is successful'
    })
})

app.post('/interactive', (req, res, next) => {
    console.log(req.body);
    return res.json({
        text: 'Command is successful'
    })
})

// heroku will set port via env PORT
const port = process.env.PORT || 8080

app.listen(port)