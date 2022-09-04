import express from 'express';
const app = express ();
app.use('/admin', express.static( __dirname+'/public'))

app.listen(4500, () => console.log('Server is running'))