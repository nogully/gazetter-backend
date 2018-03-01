const path = require('path');
const express = require('express');
const cors = require('express-cors');
const bodyParser = require('body-parser')
const port = (process.env.PORT || 3001);
const app = express();
const router = require('./router');

app.use(cors({
  allowedOrigins: ['localhost:3000']
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.config.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/assets', express.static(path.join(__dirname, '../app/assets')));

app.get('/', function (req, res) { res.sendFile(path.join(__dirname, '/../index.html')) });

app.use('/api', router);
app.get('/*', function (req, res) { res.sendFile(path.join(__dirname, '/../index.html')) });

// app.post('handle',function(request,response){
//   var query1=request.body.var1;
//   var query2=request.body.var2;
// });

// app.post('/user',function(req, res){
//   var token=req.body.token;   
//   var secret=req.body.secret;
  
//   res.end("yes");
// });

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
