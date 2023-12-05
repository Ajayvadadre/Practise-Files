const connection = require('./connection')

const express = require('express')
const bodyParser = require('body-parser')

let portno = 5000
const app = express()

app.use(bodyParser.json())

// CRUD operations

app.get('/employees',(req,res)=>{
    connection.query('SELECT * FROM employee',(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows)
        }
    })
})

app.get('/employees/:id',(req,res)=>{
    connection.query('SELECT * FROM employee where imp_id = ?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows)
        }
    })
})

app.post('/employees',(req,res)=>{
    let emp = req.body
    let data = [emp.imp_id,emp.imp_name,emp.imp_salary,emp.imp_address]
    connection.query('INSERT INTO employee(imp_id,imp_name,imp_salary,imp_address) values(?)',[data],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows)
        }
    })
})

app.delete('/employees/:id',(req,res)=>{
    connection.query('DELETE FROM employee where imp_id = ?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows)
        }
    })
})

app.patch('/employees/:id',(req,res)=>{
    let emp = req.body
    connection.query('UPDATE employee SET ? WHERE imp_id = '+req.params.id,[emp],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows)
        }
    })
})

app.listen(portno,()=>console.log('Node is running at port: '+portno))