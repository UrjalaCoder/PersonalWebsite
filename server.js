import express from 'express';
import path from 'path';
import fs from 'fs';
const app = express();

// Get the dist folder files.
app.use('/dist/', express.static(path.join(__dirname, 'dist')));
app.use('/static/', express.static(path.join(__dirname, 'static')));

const mainResponse = (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
};
app.get('/', mainResponse);

const textGet = (req, res) => {
  const textFile = req.params.id;
  console.log(textFile);
  const readStream = fs.createReadStream(`static/texts/${textFile}.txt`);
  readStream.pipe(res);
};

app.get("/texts/:id", textGet);


app.listen(3001, () => {
  console.log('Server started at port 3001'); // eslint-disable-line
});
