
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());    //Enable Cors
app.use(express.json());    //Middleware to parse JSON

app.get('/', (req, res) => {
    res.send('<h1>First Backend Using Express</h1>')
})

app.listen(port, () => {
    console.log("Listening on port 3000");
});
