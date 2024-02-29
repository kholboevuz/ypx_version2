const express = require('express')
const dotenv = require('dotenv')
const router = require('./routes/app.route')
const { engine } = require('express-handlebars')
const { connectDB } = require('./config/db')
const session = require('express-session')
const fileUpload = require('express-fileupload');

const csrf = require('csurf')
dotenv.config()

const app = express()

connectDB()
app.use(fileUpload());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}));


app.use(csrf())

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');


app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
})




app.use(router)


//server running on port
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
})