import express from 'express';
import axios from 'axios';

const PORT = process.env.PORT || 80;

const app = express();
app.get('/wordpress/', async (req, res, next) => { 
    const content = req.query.content; 
    const response = await axios.post( 
        'https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token', 
        { username: 'gossjsstudent2017', password: '|||123|||456' }, 
    ); 
    const token = response.data.token; 
    
    const wordpressResponse = await axios.post( 
        'https://wordpress.kodaktor.ru/wp-json/wp/v2/posts', 
        { content, title: 'liubov97', status: 'publish' }, 
        { 
            headers: { 
                Authorization: `Bearer ${token}`, 
            }, 
        }, 
    ); 
    
    res.send(wordpressResponse.data.id + ''); 
    })

    .all("/login", (r) => r.res.send("liubov97"))

    .listen(PORT, ()=>{
        console.log('Server has been started...');
    });
    
