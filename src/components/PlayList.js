import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlistingDoyle').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
      console.log("state", this.state.songs);
    })
  }

  fetchData(e) {
    e.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlistingDoyle').then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }
  render() {
    let songs = this.state.songs.map((song, index) => {
      return <PlayListItem key={index} song={song} /> // this.props.song
    })
    return(
      <div className="col-md-6 float-right">
        <button value="Update List" onClick={this.fetchData}>Update List</button>
        {songs}
      </div>
    )
  }
}
