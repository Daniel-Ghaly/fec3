const express = require('express');
const { url, token } = require('./config.js');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();

const port = process.env.PORT || ${port};

const headers = {
  'Authorization': process.env.token
};

// Middleware
app.use(express.static(path.join(__dirname, 'client/dist')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ----- HELPER FUNCTIONS ----- //
const axiosGet = (path, response) => {
  axios.get(`${process.env.url}${path}`, { headers })
    .then(results => { response.send(results.data); })
    .catch(err => console.error('Error executing Axios GET from API: ', err));
};

const axiosPut = (path, body, res) => {
  axios.put(`${process.env.url}${path}`, body, { headers })
    .then(() => res.status(204).send(''))
    .catch(err => console.error('Error submitting PUT req (server.js): ', err));
};

const axiosPost = (path, body, res) => {
  axios.post(`${process.env.url}${path}`, body, { headers })
    .then(() => res.status(201).send('Success'))
    .catch(err => console.error('Error completing POST req (server.js): ', err));
};
// ----- END OF HELPER FUNCTIONS ----- //


// ---------- API GET REQUESTS ---------- //
/* ----- Products ----- */
app.get('/products', (req, res) => {
  console.log(process.env.token);
  axiosGet(req.url, res);
});

app.get('/products/:product_id', (req, res) => {
  axiosGet(req.url, res);
});

app.get('/products/:product_id/styles', (req, res) => {
  axiosGet(req.url, res);
});

app.get('/products/:product_id/related', (req, res) => {
  axiosGet(req.url, res);
});

/* ----- Reviews ----- */
app.get('/reviews', (req, res) => {
  axiosGet(req.url, res);
});

app.get('/reviews/meta', (req, res) => {
  axiosGet(req.url, res);
});


/* ----- Questions ----- */
app.get('/qa/questions', (req, res) => {
  axiosGet(req.url, res);
});
// ---------- END OF GET REQUESTS ---------- //


// ---------- API PUT REQUESTS ---------- //
/* ----- Questions & Answers ----- */
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  axiosPut(req.url, req.body, res);
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  axiosPut(req.url, req.body, res);
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  axiosPut(req.url, req.body, res);
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  axiosPut(req.url, req.body, res);
});
/* ----- Ratings ----- */
app.put('/reviews/:review_id/report', (req, res) => {
  axiosPut(req.url, req.body, res);
});
app.put('/reviews/:review_id/helpful', (req, res) => {
  axiosPut(req.url, req.body, res);
});
// ---------- END OF PUT REQUESTS ---------- //


// ---------- API POST REQUESTS ---------- //
/* ----- Reviews ----- */
app.post('/reviews', (req, res) => {
  axiosPost(req.url, req.body, res);
});

/* ----- Change Requests ----- */

app.post('/interactions', (req, res) => {
  axiosPost(req.url, req.body, res);

});

/* ----- Questions & Answers ----- */
app.post('/qa/questions', (req, res) => {
  axiosPost(req.url, req.body, res);
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  axiosPost(req.url, req.body, res);
});
// ---------- END OF POST REQUESTS ---------- //


app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});