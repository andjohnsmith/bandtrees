/*
 * Authors: Austin Vanburen
 * Description: Actions for the ListOfArtists component.
 */

import axios from 'axios';

//Updates the string value represented in our search box and artists to their initial states.
export const clearSearch = () => {
	 return {
 		type: "CLEAR_SEARCH",
 		payload: null,
 	}
};

/* Data Sent BioPane Reducer.
 * Data Sent to Database:
 *	artistId
 *
 * Data Retrieved:
 * 	artist = { ArtistId: int,
 *			   ArtistName: string,
 *			   YearStart: int,
 *			   YearEnd: int (maybe NULL)
 * 			 }
 */
export const fetchBio = (artistId) => {
	console.log(artistId);
	return dispatch => {
		axios
			.get('/bandtrees/api/v1/artists/' + artistId)
			.then(res => {
				dispatch(fetchBioSuccess(res.data));
			})
			.catch (err => {
				//dispatch(activatePromotionFailure(err.message));
			})
	};
};

const fetchBioSuccess = (artist) => {
	 return {
 		type: "FETCH_BIO",
 		payload: artist,
 	}
};

/* Data sent to BioPane Reducer
 * Data Sent to Database:
 * 		artistId
 *
 * Data Retrieved:
 * songs[] where
 * 	song = {   SongId: int,
 *			   SongName: string,
 *             AlbumName: string,
 *			   AlbumYear: int,
 *             GenreName: string
 * 			 }
 */
export const fetchSongs = (artistId) => {
	console.log(artistId);
	return dispatch => {
		axios
			.get('/bandtrees/api/v1/artists/' + artistId + '/songs')
			.then(res => {
				dispatch(fetchSongsSuccess(res.data));
			})
			.catch (err => {
				//dispatch(activatePromotionFailure(err.message));
			})
	};
};

const fetchSongsSuccess = (songs) => {
	 return {
 		type: "FETCH_SONGS",
 		payload: songs,
 	}
};

/* Data sent to Search Reducer
 * Data Retrieved:
 * artist[] where
 * 	artist = { ArtistId: int,
 *			   ArtistName: string,
 *			   YearStart: int,
 *			   YearEnd: int (maybe NULL)
 * 			 }
 */
export const fetchRelated = (artistId) => {
	console.log(artistId);
	return dispatch => {
		axios
			.get('/bandtrees/api/v1/artists/' + artistId + '/related-artists')
			.then(res => {
				dispatch(fetchRelatedSuccess(res.data, artistId));
			})
			.catch (err => {
				//dispatch(activatePromotionFailure(err.message));
			})
	};
};

const fetchRelatedSuccess = (artists, artistId) => {
    var ret = [];

    artists.forEach(a => {
        if (a.InfluencerId === artistId) {
            ret.push({ArtistId:a.InfluencedId, ArtistName:a.Influenced});
        } else {
            ret.push({ArtistId:a.InfluencerId, ArtistName:a.Influencer});
        }
    });

	 return {
 		type: "ARTIST_RELATED_SEARCH",
 		payload: ret,
 	}
};
