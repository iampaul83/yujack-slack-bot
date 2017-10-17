const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('./process.env.js')

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

app.listen(process.env.PORT || 8080)