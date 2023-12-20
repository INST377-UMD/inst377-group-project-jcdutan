const express = require('express')
var bodyParser = require('body-parser')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 4000;
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));

const supabaseUrl = 'https://zgucoxetmnqcuzgyiqoy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpndWNveGV0bW5xY3V6Z3lpcW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1Nzk1NDgsImV4cCI6MjAxNjE1NTU0OH0.l25K_xLa-t78CqVxjPtPLJXuI8p_2LLK6ehFTxy7HoY'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
    res.sendFile('./public/home.html', { root: __dirname })
})

app.get('/index.html', (req, res) => {
    res.sendFile('./public/home.html', { root: __dirname })
})

app.get('/customers', async (req, res) => {
    console.log(`Getting Customer`)

    const {data, error} = await supabase
        .from('customer')
        .select();

    if(error) {
        console.log(error)
    } else if(data) {
        res.send(data)
    }
})

app.post('/customer', async (req, res) => {
    console.log('Adding Customer')

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let state = req.body.state;

    const {data, error} = await supabase
        .from('customer')
        .insert([
            {'cust_first_name': firstName, 'cust_last_name': lastName, 'cust_state': state}
        ])
        .select();

    console.log(data)
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('APP IS ALIVEEEEEE')
})