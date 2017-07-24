import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="ind-song card-block text-left song-container">
        <h3><span>User: </span>{this.props.song.userName}</h3>
        <h3><span>Artist/Band: </span>{this.props.song.songArtist}</h3>
        <h3><span>Title: </span>{this.props.song.songTitle}</h3>
        <h3><span>Notes: </span>{this.props.song.songNotes}</h3>
      </div>
    )
  }
}
