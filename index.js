import express from 'express';
import axios from 'axios';

const PORT = process.env.PORT || 4321;

const app = express();
app.get('/wordpress/', async (req, res, next) => { 
    const content = req.query.content; 
    const resp = await axios.post(
        'https://wordpress.kodaktor.ru/wp-json/jwt-auth/v1/token', 
        { username: 'gossjsstudent2017', password: '|||123|||456' }, 
    ); 
    const token = resp.data.token;
    
    const wpRes = await axios.post(
        'https://wordpress.kodaktor.ru/wp-json/wp/v2/posts', 
        { content, title: 'liubov97', status: 'publish' },
        { 
            headers: { 
                Authorization: `Bearer ${token}`, 
            }, 
        }, 
    ); 
    
    res.send(wpRes.data.id + '');
    })

    .all("/login", (r) => r.res.send("liubov97"))

    .listen(PORT, ()=>{
        console.log('server is listening');
    });


    
