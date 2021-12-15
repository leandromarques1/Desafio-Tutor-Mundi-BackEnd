//Imports
const express = require('express')
const app = express()

//Static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Set Files
app.set('views', './views')
app.set('view engine', 'ejs')

//Routes
app.get('/', (req, res)=> {
    res.render('home')
})

app.get('/notaTutor', (req, res)=> {
    res.render('notaTutor')
})


//Listen on port 5000
app.listen(5000, () => console.log('Server is running...'))