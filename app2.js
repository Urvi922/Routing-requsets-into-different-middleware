// Allows us to route our requests into different middleware

const express = require('express');

const app = express();

// more speific middlerware should be first /xyz 
app.use('/users', (req, res, next) => {
    console.log('Reached to user page');
    res.send('<h1>This is Users Page</h1>');
});

// '/' middleware should be at the last if its first all the other paths will give same response as '/' middleware respomse
app.use('/', (req, res, next) => {
    console.log('This is Print Something');
    res.send('<h1>Welcome to my Page</h1>');
});

app.listen(3600);
