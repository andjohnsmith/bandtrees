DROP TABLE IF EXISTS Influences;
DROP TABLE IF EXISTS Song;
DROP TABLE IF EXISTS Album;
DROP TABLE IF EXISTS Artist;
DROP TABLE IF EXISTS Genre;

CREATE TABLE Genre(
    GenreId INTEGER PRIMARY KEY AUTOINCREMENT,
    GenreName NVARCHAR(25)
);

CREATE TABLE Artist(
    ArtistId INTEGER PRIMARY KEY AUTOINCREMENT,
    ArtistName NVARCHAR(160) NOT NULL,
    YearStart INTEGER NOT NULL,
    YearEnd INTEGER
);

CREATE TABLE Album(
    AlbumId INTEGER PRIMARY KEY AUTOINCREMENT,
    AlbumName NVARCHAR(160) NOT NULL,
    AlbumYear INTEGER NOT NULL,
    ArtistId INTEGER NOT NULL,
    GenreId INTEGER NOT NULL,
    CONSTRAINT fk_artist_album FOREIGN KEY (ArtistId) REFERENCES Artist(ArtistId),
    CONSTRAINT fk_genre_album FOREIGN KEY (GenreId) REFERENCES Genre(GenreId)
);

CREATE TABLE Song(
    SongId INTEGER PRIMARY KEY AUTOINCREMENT,
    SongName NVARCHAR(100) NOT NULL,
    AlbumId INTEGER NOT NULL,
    CONSTRAINT fk_album_song FOREIGN KEY (AlbumId) REFERENCES Album(AlbumId)
);

CREATE TABLE Influences(
    InfluencerId INTEGER NOT NULL,
    InfluencedId INTEGER NOT NULL,
    CONSTRAINT fk_artist1_influences FOREIGN KEY (InfluencerId) REFERENCES Artist(ArtistId),
    CONSTRAINT fk_artist2_influences FOREIGN KEY (InfluencedId) REFERENCES Artist(ArtistId)
);

INSERT INTO Genre(GenreName) VALUES ('Rock');
INSERT INTO Genre(GenreName) VALUES ('Alternative');
INSERT INTO Genre(GenreName) VALUES ('Pop');

INSERT INTO Artist(ArtistName, YearStart, YearEnd) VALUES ('Elvis Presley', 1953, 1977);
INSERT INTO Artist(ArtistName, YearStart, YearEnd) VALUES ('The Beatles', 1960, 1970);
INSERT INTO Artist(ArtistName, YearStart, YearEnd) VALUES ('David Bowie', 1962, 2016);
INSERT INTO Artist(ArtistName, YearStart, YearEnd) VALUES ('The Velvet Underground', 1964, 1996);
INSERT INTO Artist(ArtistName, YearStart, YearEnd) VALUES ('Pink Floyd', 1965, 2014);
INSERT INTO Artist(ArtistName, YearStart, YearEnd) VALUES ('Joy Division', 1976, 1980);
INSERT INTO Artist(ArtistName, YearStart, YearEnd) VALUES ('Sonic Youth', 1981, 2011);
INSERT INTO Artist(ArtistName, YearStart)          VALUES ('Pixies', 1986);
INSERT INTO Artist(ArtistName, YearStart, YearEnd) VALUES ('Nirvana', 1987, 1994);
INSERT INTO Artist(ArtistName, YearStart)          VALUES ('The Breeders', 1989);
INSERT INTO Artist(ArtistName, YearStart)          VALUES ('Interpol', 1997);
INSERT INTO Artist(ArtistName, YearStart)          VALUES ('St. Vincent', 2003);
INSERT INTO Artist(ArtistName, YearStart)          VALUES ('Car Seat Headrest', 2010);

INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Elvis Presley', 1956, 1, 1);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Blue Hawaii', 1961, 1, 1);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Revolver', 1966, 2, 1);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Sgt. Pepper''s Lonely Hearts Club Band', 1967, 2, 1);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('The Rise and Fall of Ziggy Stardust and the Spiders from Mars', 1972, 3, 1);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('"Heroes"', 1977, 3, 3);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Scary Monsters (and Super Creeps)', 1980, 3, 3);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('The Velvet Underground & Nico', 1967, 4, 1);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('The Velvet Underground', 1969, 4, 1);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Wish You Were Here', 1975, 5, 1);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Unknown Pleasures', 1979, 6, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Daydream Nation', 1989, 7, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Surfer Rosa', 1988, 8, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Doolittle', 1989, 8, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Bleach', 1989, 9, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Nevermind', 1991, 9, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('In Utero', 1993, 9, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Last Splash', 1993, 10, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Turn on the Bright Lights', 2002, 11, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('St. Vincent', 2014, 12, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Teens of Denial', 2016, 13, 2);
INSERT INTO Album(AlbumName, AlbumYear, ArtistId, GenreId) VALUES ('Twin Fantasy (Face to Face)', 2018, 13, 2);

INSERT INTO Song(SongName, AlbumId) VALUES ('Blue Suede Shoes', 1);
INSERT INTO Song(SongName, AlbumId) VALUES ('Can''t Help Falling in Love', 2);
INSERT INTO Song(SongName, AlbumId) VALUES ('Here, There and Everywhere', 3);
INSERT INTO Song(SongName, AlbumId) VALUES ('Fixing a Hole', 4);
INSERT INTO Song(SongName, AlbumId) VALUES ('Five Years', 5);
INSERT INTO Song(SongName, AlbumId) VALUES ('"Heroes"', 6);
INSERT INTO Song(SongName, AlbumId) VALUES ('It''s No Game (No. 1)', 7);
INSERT INTO Song(SongName, AlbumId) VALUES ('Heroin', 8);
INSERT INTO Song(SongName, AlbumId) VALUES ('Pale Blue Eyes', 9);
INSERT INTO Song(SongName, AlbumId) VALUES ('Have a Cigar', 10);
INSERT INTO Song(SongName, AlbumId) VALUES ('Wish You Were Here', 10);
INSERT INTO Song(SongName, AlbumId) VALUES ('Disorder', 11);
INSERT INTO Song(SongName, AlbumId) VALUES ('Teenage Riot', 12);
INSERT INTO Song(SongName, AlbumId) VALUES ('Candle', 12);
INSERT INTO Song(SongName, AlbumId) VALUES ('Where Is My Mind?', 13);
INSERT INTO Song(SongName, AlbumId) VALUES ('Hey', 14);
INSERT INTO Song(SongName, AlbumId) VALUES ('About a Girl', 15);
INSERT INTO Song(SongName, AlbumId) VALUES ('Lounge Act', 16);
INSERT INTO Song(SongName, AlbumId) VALUES ('Serve the Servants', 17);
INSERT INTO Song(SongName, AlbumId) VALUES ('Cannonball', 18);
INSERT INTO Song(SongName, AlbumId) VALUES ('PDA', 19);
INSERT INTO Song(SongName, AlbumId) VALUES ('The New', 19);
INSERT INTO Song(SongName, AlbumId) VALUES ('Birth in Reverse', 20);
INSERT INTO Song(SongName, AlbumId) VALUES ('Fill in the Blank', 21);
INSERT INTO Song(SongName, AlbumId) VALUES ('Beach Life-in-Death', 22);
INSERT INTO Song(SongName, AlbumId) VALUES ('Bodys', 22);

INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (1, 2);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (2, 3);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (2, 8);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (2, 9);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (2, 10);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (2, 13);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (3, 6);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (3, 9);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (3, 12);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (4, 3);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (4, 6);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (4, 7);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (4, 8);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (4, 9);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (5, 13);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (6, 11);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (7, 9);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (7, 11);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (8, 9);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (8, 10);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (8, 11);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (9, 10);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (9, 11);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (9, 12);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (9, 13);
INSERT INTO Influences(InfluencerId, InfluencedId) VALUES (10, 12);
