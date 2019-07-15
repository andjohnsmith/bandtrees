/*
 * Authors: Austin Vanburen
 * Description: Container for Query component. Connects HTML code (component) to our react-redux framework.
 * - Upon clicking button, string is sent to our server, which uses REST API principles to obtain data from spotify.
 * - String entry = Artist name.
 * - Successful spotify query will allow server to continue to populate database with corresponding spotify queries (albums etc.).
 */

//React-Redux Boilerplate
import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components(Compnent HTML Injections && Containers)

//Imported React-Strap components
import { Jumbotron, Container, Row, Col } from 'reactstrap';

//Imported Actions

//Allows access to our storage. Storage -> Property
const mapStateToProps = (state) => {
	return {
		artist: state.bio,
	}
}

//Allows access to our actions. Action -> Property.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
	}, dispatch);
}

/* 	artist = { ArtistId: int,
*			   ArtistName: string,
*			   YearStart: int,
*			   YearEnd: int (maybe NULL)
* 			 }
 *
 * songs[] where
 * 	song = {   SongId: int,
 *			   SongName: string,
 *             AlbumName: string,
 *			   AlbumYear: int,
 *             GenreName: string
 * 			 }
 */
//HTML rendered code.
class BioPane extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    };
  	}

	render() {
		return (
			<Jumbotron fluid>
              <h1 className='display-3'>{this.props.artist.ArtistName}</h1>
              <p className="lead">Active {this.props.artist.YearStart}-{this.props.artist.YearEnd || 'present'}</p>
		    </Jumbotron>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BioPane);
