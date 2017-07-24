import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="ind-song">
        <h3>User: {this.props.song.userName}</h3>
        <h3>Artist/Band: {this.props.song.songArtist}</h3>
        <h3>Title: {this.props.song.songTitle}</h3>
        <h3>Notes: {this.props.song.songNotes}</h3>
      </div>
    )
  }
}
