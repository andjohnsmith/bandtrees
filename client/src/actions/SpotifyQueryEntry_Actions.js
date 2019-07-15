/*
 * Authors: Austin Vanburen
 * Description: Actions for the Spotify Query Entry component.
 * Client ID: 519985fe78c948d0bc50566b3590e1a0
 * Client Secret: 14ccafe854e7471b9756fd644e370cbc

 
 */

 import axios from 'axios';

//github.com/spotify/web-api-examples/blob/master/client_credentials/app.js
//github.com/axios/axios#using-applicationx-www-form-urlencoded-format
//Dispatches Artist name. Queries name using spotify api.
export const runQuery = (artist) => {
	console.log(artist);

	//Obtains authentication token from spotify.
	var url = "https://accounts.spotify.com/api/token";
	var headers = { //Basic <clientid:clientsecret>
		'Authorization': 'Basic 519985fe78c948d0bc50566b3590e1a0:14ccafe854e7471b9756fd644e370cbc'
	}

	//Sends body in form of "application/x-www-form-urlencoded"
	const params = new URLSearchParams();
	params.append('grant_type', 'client_credentials');

	return dispatch => {
		axios.post(url, params, { headers: headers })
		.then(res => { console.log(res.data) });
			//dispatch(runQuery(res.data));
	};


	//var url = "https://api.spotify.com/v1/search?q=";
	//Replaces white space with hexcode
	//const name = artist.replace(/\s/g, "%20");

	//url = url.concat(name);
	//url = url.concat("&type=artist&limit=10");
	//return dispatch => {
	//	axios.get(url).then(res => {
	//		dispatch(runQuery(res.data));
	//	})
	//};
}

const queryArtists = (artists) => {
	console.log(artists);
	//Iterate across artists. Filter?

}