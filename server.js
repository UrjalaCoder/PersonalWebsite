import express from 'express';
import path from 'path';
import fs from 'fs';
import config from './config';
import fetch from 'node-fetch';

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
  const readStream = fs.createReadStream(`static/texts/${textFile}.json`);
  readStream.pipe(res);
};

app.get("/texts/:id", textGet);

const getRealData = (repos) => {
  return repos.map((repo) => {
    const { name, html_url, description, homepage, id } = repo;
    if(description && description.charAt(0) === '!') {
      return undefined;
    }
    return { name, html_url, description, homepage, id };
  }).filter((repo) => repo !== undefined);
};

const getRepos = (req, res) => {
  const { GITHUB_API } = config;
  const url = "https://api.github.com/user/repos";
  const headers = {
    'Authorization': `token ${GITHUB_API}`,
  };
  fetch(url, { headers })
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
      return json;
    }).then((json) => res.send(getRealData(json)));
};

app.get('/repos', getRepos);


app.listen(3001, () => {
  console.log('Server started at port 3001'); // eslint-disable-line
});
