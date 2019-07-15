/*
 * Authors: Austin Vanburen
 * Description: Actions for the FilterBar component.
 */

import axios from 'axios';


/* User searches for artist inspirations...
 * Data Sent:
 *	artistId
 *	filters = { dropdownOpen: bool(this can be ignored),
 *    			filterDates: bool,
 *    			filterFeatures: bool,
 *    			filterCovers: bool,
 *    			dateStart: int,
 *    			dateEnd: int,
 *    		  }
 *
 * Data Retrieved:
 *	artists[] where
 * 	Artist = { ArtistId: int,
 *			   ArtistName: string,
 *			   DateStart: int (as a year),
 *			   ImageURL: string,
 * 			 }
 */
export const queryInspo = (artistId, filters) => {
	console.log(artistId);
	console.log(filters);
	return dispatch => {
		axios
			.get('/bandtrees/api/v1/artists/' + artistId + '/related-artists',
				filters
			)
			.then(res => {
				dispatch(queryInspoSuccess(res.data));
			})
			.catch (err => {
				//dispatch(activatePromotionFailure(err.message));
			})
	};
};

const queryInspoSuccess = (artists) => {
 	return {
 		type: "ARTIST_INSPO_SEARCH",
 		payload: artists,
 	}
};

/* User searches for artists who are inspired by selected artist...
 * Data Sent:
 *	artistId
 *	filters = { dropdownOpen: bool(this can be ignored),
 *    			filterDates: bool,
 *    			filterFeatures: bool,
 *    			filterCovers: bool,
 *    			dateStart: int,
 *    			dateEnd: int,
 *    		  }
 *
 * Data Retrieved:
 *	artists[] where
 * 	Artist = { ArtistId: int,
 *			   ArtistName: string,
 *			   DateStart: int (as a year),
 *			   ImageURL: string,
 * 			 }
 */
export const queryInspoFor = (artistId, filters) => {
	return dispatch => {
		axios
			.post('http://localhost:3000/xxx',
				{ artistId, filters },
			)
			.then(res => {
				dispatch(queryInspoSuccess(res.data));
			})
			.catch (err => {
				//dispatch(activatePromotionFailure(err.message));
			})
	};
};

const queryInspoForSuccess = (artistId, filters) => {
	return {
 		type: "ARTIST_INSPO_FOR_SEARCH",
 		payload: artistId,
 	};
};
