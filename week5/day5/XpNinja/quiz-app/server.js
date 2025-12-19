import express, {json} from 'express';
import questions from './questions.js';

const app = express();
app.use(json());
//app.use(express.static("public")); //Tout ce qui se trouve dans le dossier public/ peut être servi directement au navigateur.

app.get('/questions', (req, res) => {
    res.json(questions);
});

app.post('/answer', (req, res) => {
    const { questionIndex, choiceIndex } = req.body;
    const question = questions[questionIndex];
    const isCorrect = question.answer === choiceIndex ; 
    res.json({ correct: isCorrect });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});