var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/bandtrees/api/v1/artists', function(req, res, next) {
    let sql = 'SELECT ArtistId, ArtistName FROM Artist WHERE ArtistName LIKE \'%' + req.query.name + '%\'';
    db.all(sql, [], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

router.get('/bandtrees/api/v1/artists/:artistId', function(req, res, next) {
    var sql = 'SELECT ArtistName, YearStart, YearEnd FROM Artist WHERE ArtistId = ' + req.params.artistId;
    db.get(sql, [], (err, row) => {
        if (err) throw err;
        res.send(row);
    });
});

router.get('/bandtrees/api/v1/artists/:artistId/songs', function(req, res, next) {
    let sql = 'SELECT SongName, AlbumName, AlbumYear, GenreName FROM Artist NATURAL JOIN Album NATURAL JOIN Genre NATURAL JOIN Song WHERE ArtistId = ' + req.params.artistId;
    db.all(sql, [], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

router.get('/bandtrees/api/v1/artists/:artistId/related-artists', function(req, res, next) {
    let sql = 'SELECT InfluencerId, Influencer, InfluencedId, Influenced FROM Influences NATURAL JOIN (SELECT ArtistId AS InfluencedId, ArtistName AS Influenced FROM Artist) NATURAL JOIN (SELECT ArtistId AS InfluencerId, ArtistName AS Influencer FROM Artist) WHERE InfluencerId = '
              + req.params.artistId + ' OR InfluencedId = ' + req.params.artistId;
    db.all(sql, [], (err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
