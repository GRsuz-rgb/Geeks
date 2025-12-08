import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());


//User Registration: POST /api/register
const users = [];
const SECRET = process.env.JWT_SECRET;
/*
✔️ recevoir un username et un password
✔️ chiffrer le mot de passe
✔️ stocker l’utilisateur dans un tableau
*/
app.post('/api/register', async (req, res) => {
    const {username, password} = req.body;

    if (!username || !password)
        return res.status(400).json({error : "Missing data"});

    const hashPassword = await bcrypt.hash(password, 10); //10 salt rounds(facteur de complexité= nombre de tours).
    
    users.push({username, password : hashPassword});
    
    res.json({message : "user registered"});
});


//User Login: POST /api/login
/*
✔️ vérifier si l’utilisateur existe
✔️ comparer le mot de passe tapé avec le mot de passe chiffré
✔️ s’il est correct → générer un token JWT
*/
app.post("/api/login", async (req, res) => {
    const {username, password} = req.body;

    const user = users.find(u => u.username === username);
    if (!user) 
        return res.status(400).json({ error: "user not found"});

    const validPsw = await bcrypt.compare(password, user.password);
    if (!validPsw) return res.status(400).json({ error: "invalid password"});

    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

    res.json({ message: "logged successfully in", token });
});


//User Profile: GET /api/profile
/*
✔️ lire le token dans Authorization: Bearer TOKEN
✔️ vérifier si le token est valide
✔️ si oui → afficher le profil
*/
function authenticateToken(req, res, next) {
    const header = req.headers.authorization; //récupère le token JWT envoyé par le client dans le header Authorization.
    if (!header) 
        return res.status(401).json({ error: "Authorization header missing" });

    const token = header.split(' ')[1]; //extrait le token de la chaîne "Bearer TOKEN".
    if (!token) 
        return res.status(401).json({ error: "Token missing" });

    const data = jwt.verify(token, SECRET); //vérifie la validité du token en utilisant la clé secrète.
    req.user = data; 
    next(); //passe au middleware ou à la route suivante si le token est valide.  
}
app.get('/api/profile', authenticateToken, (req, res) => {
    res.json({ message: "user profile", user: req.user });
});


//running server
app.listen (5000, () => {
    console.log('Server is running on port http://localhost:5000' );
});