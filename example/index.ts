import express from 'express';

const app = express();
app.use(express.json());

const messages: string[] = ['msg1', 'msg2']



app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})



app.post('/message', (req,res) =>{
    const {msg} = req.body;

    messages.push(msg);
    console.log(messages)
    res.sendStatus(201)
})

app.get('/message', (req, res) =>{
    res.json(messages)
})

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log("Server is running on port: ", port));