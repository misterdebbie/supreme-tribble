const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
//use the ejs templates in views directory
app.set('views', path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

const yangRouter = require('./routes/yang-routes');
app.use('/style', yangRouter);

app.get('/', (req, res) => {
  res.render('main', {
    message: 'website'
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
