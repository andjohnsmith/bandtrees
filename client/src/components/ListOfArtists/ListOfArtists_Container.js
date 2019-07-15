/*
 * Authors: Austin Vanburen
 * Description: Container for ListOfArtists component. Connects HTML code (component) to our react-redux framework.
 * - List of artists, be it for an inspiration tree, or for an artist search results.
 * - Clicking upon an Artist fetches a bio.
 */

//React-Redux Boilerplate
import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components(Compnent HTML Injections && Containers)

//Imported Actions
import {clearSearch} from '../../actions/ListOfArtists_Actions.js';
import {fetchBio} from '../../actions/ListOfArtists_Actions.js';
import {fetchRelated} from '../../actions/ListOfArtists_Actions.js';
import {fetchSongs} from '../../actions/ListOfArtists_Actions.js';
import {setTop} from '../../actions/App_Actions.js';
import { ListGroup, ListGroupItem} from 'reactstrap';


//Allows access to our storage. Storage -> Property
const mapStateToProps = (state) => {
	return{
		artists: state.search.artists,
	}
}

//Allows access to our actions. Action -> Property.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		fetchBio: fetchBio,
		fetchSongs: fetchSongs,
		fetchRelated: fetchRelated,
		clearSearch: clearSearch,
		setTop: setTop,
	}, dispatch);
}

//HTML rendered code.
class ListOfArtists extends React.Component{
	constructor(props) {
	    super(props);

	    //Binds Local Functions
	    this.handleClick = this.handleClick.bind(this);
        this.renderArtists = this.renderArtists.bind(this);
	    //Local State
    	this.state = {
    	};
  	}

  	handleClick(event, artistId) {
  		//event.preventDefault();
  		this.props.fetchBio(artistId);
  		this.props.fetchSongs(artistId);
  		this.props.fetchRelated(artistId);
  		this.props.setTop('b');
  		//this.props.clearSearch();
  	}

    render() {
        return (
            <div id='artistList'>
            <h1 className='display-4'>Related Artists</h1>
            <ListGroup>{this.renderArtists()}</ListGroup>
            </div>
        )
    }

  	//	ArtistId, AritstName
	renderArtists() {
		return this.props.artists.map((artist, i) => {
			return(
                <ListGroupItem key={i} className="clickable" onClick={(e) => this.handleClick(e, artist.ArtistId)}>
                  {artist.ArtistName}
                </ListGroupItem>
			);
		});
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfArtists);
