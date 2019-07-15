/*
 * Authors: Austin Vanburen
 * Description: Stored information for the BioPane component. Accessed via the properties set in the initialState.
 */

//Data about an artist to be shown in the Bio Pane.
// from Artist Table: ArtistId, DateStart, ArtistName, ImageURL, ArtistHref
// selectedAlbums[]: AlbumId, AlbumType, AlbumHref, ReleaseDate, AlbumName
// selectedTracks[]: TrackId, Href, TrackName
const initialState = {
	ArtistId: -1,
	ArtistName: '',
    YearStart: 0,
	YearEnd: 0,

	songs: [],
}

/* Data Retrieved:
 * 	Artist = { ArtistId: int,
 *			   ArtistName: string,
 *			   DateStart: int (as a year),
 *			   DateEnd: int (as a year),
 *			   ImageURL: string,
 *			   ArtistHref: string,
 * 			 }
 *
 * selectedAlbums[] where
 * 	Album = {  AlbumId: int,
 *			   AlbumName: string,
 *			   AlbumType: string,
 *			   ReleaseDate: int (as a year),
 *			   AlbumHref: string,
 * 			 }
 *
 * selectedTracks[] where
 * 	Track = {  TrackId: int,
 *			   TrackName: string,
 *			   TrackHref: string,
 * 			 }
 */
export default function (state = initialState, action)  {
	switch(action.type){
		case "FETCH_BIO":
			console.log(action.payload); //TODO: update values.
			return { ...state,
                        ArtistId: action.payload.ArtistId,
                        ArtistName: action.payload.ArtistName,
                        YearStart: action.payload.YearStart,
                        YearEnd: action.payload.YearEnd,
                    };
        case "FETCH_SONGS":
    		console.log(action.payload); //TODO: update values.
    		return { ...state, songs: action.payload };
		default:
			return state;
	};
};
