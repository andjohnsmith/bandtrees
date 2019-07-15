/*
 * Authors: Austin Vanburen, Andrew Smith
 * Description: Serves as the root component for our application.
 */

//Boiler plate
import React, { Component } from 'react';
import {connect} from 'react-redux';

//Imported CSS
import './App.css';

//React-Strap Components
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Table } from 'reactstrap';

//Imported Components
import Box from './components/SpotifyQueryEntry/SpotifyQueryEntry_Container.js'

import FilterBar from './components/FilterBar/FilterBar_Container.js'
import ListOfArtists from './components/ListOfArtists/ListOfArtists_Container.js'
import Search from './components/Search/Search_Container.js'
import BioPane from './components/BioPane/BioPane_Container.js'

//Allows access to data stored from our reducer. See rootReducer for more information.
const mapStateToProps = (state) => {
  return {
    searchField: state.search.searchField,
    top: state.app.top,
    bottom: state.app.bottom,
    songs: state.bio.songs,
  }
}

//Primary HTML rendered on our webpage. Additional imported components may be rendered.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.renderTop = this.renderTop.bind(this);
    this.renderBottom = this.renderBottom.bind(this);
    this.renderSongs = this.renderSongs.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Band Trees</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Search></Search>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

      <Container id='renderedTop'>{this.renderTop()}</Container>
      <Container>{this.renderBottom()}</Container>
      </div>
    );
  }

  renderTop() {
    switch (this.props.top) {
      case 'w':
        return (
            <Jumbotron fluid>
                <h1 className='display-3'>Welcome</h1>
                <p className='lead'>Discover artists related to those you already love</p>
            </Jumbotron>
        )

      case 's':
        return (
            <Jumbotron>
                <h1 className="searchHeader">Results for "{this.props.searchField}"</h1>
            </Jumbotron>
        )

      case 'b': //<FilterBar></FilterBar>
        return (
            <Container>
              <BioPane></BioPane>
                <Table bordered id='songTable'>
                  <caption id='songsTable' className='display-4'>Selected Songs</caption>
                  <thead>
                    <tr>
                      <th>Song Title</th>
                      <th>Album</th>
                      <th>Year</th>
                      <th>Genre</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderSongs()}</tbody>
                </Table>
            </Container>
        )
    }

  }

/* songs[] where
 * 	song = {   SongId: int,
 *			   SongName: string,
 *             AlbumName: string,
 *			   AlbumYear: int,
 *             GenreName: string
 * 			 }
 */
  renderSongs() {
      return this.props.songs.map((song, i) => {
          return(
              <tr key={i}>
                <td>{song.SongName}</td>
                <td>{song.AlbumName}</td>
                <td>{song.AlbumYear}</td>
                <td>{song.GenreName}</td>
              </tr>
          );
      });
  }

  renderBottom() {
    switch (this.props.bottom) {
      case 'e':
        return (
          <div>
          </div>
        )
      case 'l':
        return (
          <Container>
            <ListOfArtists></ListOfArtists>
          </Container>
        )
    }
  }
}

export default connect(mapStateToProps)(App);
