/*
 * Authors: Austin Vanburen
 * Description: Container for FilterBar component. Connects HTML code (component) to our react-redux framework.
 * - Upon clicking button, string is sent to our server, which uses REST API principles to obtain data from spotify.
 * - Provides radial buttons for the folllowing search criteria:
 * - - Ignore Covers, Ignore Features, Filter Dates
 * - - Filter Dates, when true allows editing on "year" text boxes.
 * - Provides drop down button ("Search") with the following options:
 * - - "Inspirations", "Inspirations for"
 */

//React-Redux Boilerplate
import React, {Component} from 'react';
import {bindActionCreator} from 'redux';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Imported Components(Compnent HTML Injections && Containers)

//Imported React-Strap components
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

//Imported Actions
import {queryInspo} from '../../actions/FilterBar_Actions.js';
import {queryInspoFor} from '../../actions/FilterBar_Actions.js';
import {setBottom} from '../../actions/App_Actions.js';

//Allows access to our storage. Storage -> Property
const mapStateToProps = (state) => {
	return {
		artistId: state.bio.ArtistId,
	}
}

//Allows access to our actions. Action -> Property.
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		queryInspo: queryInspo,
		queryInspoFor: queryInspoFor,
		setBottom: setBottom,
	}, dispatch);
}

//HTML rendered code.
class FilterBar extends React.Component{
	constructor(props) {
	    super(props);

	    //Binds Local Functions
	    this.toggleDrop = this.toggleDrop.bind(this);
	    this.toggleFilterDates = this.toggleFilterDates.bind(this);
	    this.toggleFilterFeatures = this.toggleFilterFeatures.bind(this);
	    this.toggleFilterCovers = this.toggleFilterCovers.bind(this);
	    this.handleStartDateChange = this.handleStartDateChange.bind(this);
	    this.handleEndDateChange = this.handleEndDateChange.bind(this);
	    this.handleSearchInspo = this.handleSearchInspo.bind(this);
	    this.handleSearchFor = this.handleSearchFor.bind(this);
	    //Refs for uncontrolled components.
	    //this.startInput = React.createRef();

	    //Local State
    	this.state = {
      		dropdownOpen: false,
      		filterDates: false,
      		filterFeatures: false,
      		filterCovers: false,
      		dateStart: "2019",
      		dateEnd: "2019",
    	};
  	}
  	//TODO: bug, onChange triggered  and sends previously stored value.
  	toggleDrop() {
	    this.setState({
	      	dropdownOpen: !this.state.dropdownOpen
	    });
	}

	toggleFilterDates() {
		this.setState({
			filterDates: !this.state.filterDates
		});
	}

	toggleFilterFeatures() {
		this.setState({
			filterFeatures: !this.state.filterFeatures
		});
	}

	toggleFilterCovers() {
		this.setState({
			filterCovers: !this.state.filterCovers
		});
	}

	handleStartDateChange(value) {
		this.setState({
			dateStart: value,
		});
	}

	handleEndDateChange(value) {
		this.setState({
			dateEnd: value,
		});
	}

  	handleSearchInspo(event) {
  		event.preventDefault();
  		this.props.setBottom('l');
  		this.props.queryInspo(this.props.artistID, this.state);
  	}

  	handleSearchFor(event) {
  		event.preventDefault();
  		this.props.setBottom('l');
  		this.props.queryInspoFor(this.props.artistID, this.state);
  	}

	render() { 
		return (
			<Form inline>
				<legend>Filter:</legend>
		        <FormGroup row check>
		            <Label check>
		              	<Input type="checkbox" name="coverBox" onClick={this.toggleFilterCovers}/>{' '}
		            	Ignore Covers
		            </Label>
		            <Label check>
		            	<Input type="checkbox" name="filterBox" onClick={this.toggleFilterFeatures}/>{' '}
		            	Ignore Features
		            </Label>
		        </FormGroup>
		        <FormGroup row inline check>
		            <Label check>
		            	<Input type="checkbox" name="dateBox" onClick={this.toggleFilterDates}/>{' '}
		            	Filter Dates: 
		            	<Input type="number" name="yearStart" id="yearStart" disabled={!this.state.filterDates}
		            	value={this.state.dateStart} onChange={e => this.handleStartDateChange(e.target.value)}/>
		            	   to 
		            	<Input type="number" name="yearEnd" id="yearEnd" disabled={!this.state.filterDates}
		            	value={this.state.dateEnd} onChange={e => this.handleEndDateChange(e.target.value)}/>
		            </Label>
	        	</FormGroup>
		        	<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop}>
				        <DropdownToggle caret>
				          	Search
				        </DropdownToggle>
				        <DropdownMenu>
				          	<DropdownItem header>Artist: </DropdownItem>
				          	<DropdownItem onClick={this.handleSearchInspo}
				          	>Inspirations</DropdownItem>
				          	<DropdownItem divider />
				          	<DropdownItem onClick={this.handleSearchFor}
				          	>Inspirations For</DropdownItem>
				        </DropdownMenu>
	      		</ButtonDropdown>
          	</Form>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);



 	

