const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
    host: 'sql113.infinityfree.com',
    user: 'if0_35392934',
    password: 'gJg8nkusCqbSGU',
    database: 'if0_35392934_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as ID ' + db.threadId);
});

app.get('/api/getImagesByTag', (req, res) => {
    const tag = req.query.tag.toLowerCase();
    const query = `
        SELECT bilder.*
        FROM bilder
        JOIN tags ON bilder.tag_id = tags.tag_id
        WHERE LOWER(tags.tag_name) = ?
    `;

    db.query(query, [tag], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
