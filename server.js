import express from 'express';
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import moment from 'moment';

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

// Implement a simple cache.

let gitCache = {};
let lastCacheUpdate = undefined;
const getRepos = (req, res) => {

  const now = moment();
  // Update every hour
  if(!lastCacheUpdate || now.isAfter(lastCacheUpdate, 'hour')) {
    const { GITHUB_API } = process.env;
    const url = "https://api.github.com/user/repos";
    const headers = {
      'Authorization': `token ${GITHUB_API}`,
    };
    fetch(url, { headers })
    .then((data) => data.json())
    .then((json) => {
      return json;
    }).then((json) => {
      const realData = getRealData(json);
      gitCache = realData;
      lastCacheUpdate = now;
      console.log('Sending real!');
      res.send(realData);
    });
  } else {
    console.log('Sending cached!');
    res.send(gitCache);
  }
};

app.get('/repos', getRepos);


app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started at port ${process.env.PORT || 3001}`);
});
