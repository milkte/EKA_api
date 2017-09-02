var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pg = require('pg');
var index = require('./routes/index');
var users = require('./routes/users');
var bookshelf = require('./database');
var app = express();

app.set('port', (process.env.PORT || 5000));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// app.get('/db', function (request, response) {
//     pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//         client.query('SELECT * FROM test_table', function(err, result) {
//             done();
//             if (err)
//             { console.error(err); response.send("Error " + err); }
//             else
//             { response.render('pages/db', {results: result.rows} ); }
//         });
//     });
// });


// var User = bookshelf.Model.extend({
//     tableName: 'users',
//     posts: function(){
//       return this.hasMany(Posts);
//     }
// });

// var Posts = bookshelf.Model.extend({
//     tableName: 'messages',
//     tags: function() {
//         return this.belongsToMany(Tag);
//     }
// });
//
// var Tag = bookshelf.Model.extend({
//     tableName: 'tags'
// });

// User.where('id', 1).fetch({withRelated: ['posts.tags']}).then(function(user) {
//     console.log(user.related('posts').toJSON());
// }).catch(function(err) {
//     console.error(err);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
