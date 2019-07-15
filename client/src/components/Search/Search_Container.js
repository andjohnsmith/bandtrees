/*
 * Authors: Austin Vanburen
 * Description: Container for SearchBox component. Connects HTML code (component) to our react-redux framework.
 * - Search results show up in real time, offering a list of artists who's name matches the given string.
 * - Clicking upon an Artist triggers the creation of an Inspiration Tree.
 */

//React-Redux Boilerplate
import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components(Compnent HTML Injections && Containers)
import SearchBox from './SearchBox_Component.js';

//Imported React-Strap components
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

//Imported Actions
import {setSearchField} from '../../actions/Search_Actions.js';
import {searchArtists}  from '../../actions/Search_Actions.js';
import {setTop} from '../../actions/App_Actions.js';
import {setBottom} from '../../actions/App_Actions.js';

//Allows access to our storage. Storage -> Property
const mapStateToProps = (state) => {
	return{
		artists: state.search.artists,
		searchField: state.search.searchField,
	}
}

//Allows access to our actions. Action -> Property.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		onSearchChange: setSearchField,
		searchArtists: searchArtists,
		setTop: setTop,
		setBottom: setBottom,
	}, dispatch);
}

//HTML rendered code.
class Search extends React.Component{
	constructor(props) {
	    super(props);

	    //Binds Local Functions
	    this.handleClick = this.handleClick.bind(this);

	    //Local State
    	this.state = {
    	};
  	}

	handleClick(event) {
		event.preventDefault();
		this.props.setTop('s');
		this.props.setBottom('l');
		this.props.searchArtists(this.props.searchField);
	}

	handleChange(event) {
		//console.log(event.currentTarget.value);
		event.preventDefault();
		this.props.onSearchChange(event.currentTarget.value);
	}

	render() {
		return (
	      	<Container>
	        	<Row>
	          		<Col>
	          			<SearchBox searchChange={(event) => this.handleChange(event)}></SearchBox>
	          		</Col>
	          		<Col>
	          			<Button color="primary" onClick={(event) => this.handleClick(event)}>Search</Button>{' '}
	          		</Col>
	        	</Row>
	      	</Container>
      	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);



 	

