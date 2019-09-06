import express from 'express';
import path from 'path';
const app = express();

// Get the dist folder files.
app.use('/', (req, res, next) => {
  console.log(req.url);
  next();
});
app.use('/dist/', express.static(path.join(__dirname, 'dist')));
app.use('/static/', express.static(path.join(__dirname, 'static')));

const mainResponse = (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
};
app.get('/', mainResponse);


app.listen(3001, () => {
  console.log('Server started at port 3001'); // eslint-disable-line
});
