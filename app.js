import express from 'express';

const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.render('home');
});