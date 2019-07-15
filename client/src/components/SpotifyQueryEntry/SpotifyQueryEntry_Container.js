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
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//Imported Actions
import {runQuery} from '../../actions/SpotifyQueryEntry_Actions.js';

//Allows access to our storage. Storage -> Property
const mapStateToProps = (state) => {
	return {
	}
}

//Allows access to our actions. Action -> Property.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		runQuery: runQuery,
	}, dispatch);
}

//HTML rendered code.
class SpotifyQueryEntry extends React.Component{
	constructor(props) {
	    super(props);

	    this.state = {
	    	artistName: "",
	    };

	    this.handleEntryChange = this.handleEntryChange.bind(this);
  		this.handleQueryClick = this.handleQueryClick.bind(this);
  	}

  	handleEntryChange(value) {
		this.setState({artistName: value});
  	}

  	handleQueryClick() {
  		this.props.runQuery(this.state.artistName);
  	}

	render() {
		return (
			<Form>
		        <FormGroup>
		        	<Label for="artistQuery">Add to DB:</Label>
		        	<Input type="text" name="query" id="artistQuery" placeholder="'Nirvana'"
		        		onChange={e => this.handleEntryChange(e.target.value)}/>
		        </FormGroup>
		        <Button onClick={() => this.handleQueryClick()}>Submit</Button>
		    </Form>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SpotifyQueryEntry);



 	

