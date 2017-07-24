import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

export default class PlayListForm extends Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle:''
    }
    this.addToList = this.addToList.bind(this);
    this.handleInput = this.handleInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  addToList(e) {
    e.preventDefault();
    // this.setState({
    //   userName: e.target.userName.value,
    //   songTitle: e.target.songTitle.value,
    //   songArtist: e.target.songArtist.value,
    //   songNotes: e.target.songNotes.value
    // });
    let listItem = JSON.stringify(this.state);
    console.log('list item', listItem);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlistingDoyle", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle:''
    });
  }

  handleInput(event) {
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object);
    // this.setState({
    //   userName: event.target.value
    // })
    // console.log(this.state);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   // this.props.handleSubmit(this.props.value);
  // }

  render() {
    return(
      <form className="col-md-6" onSubmit={this.addToList}>
        <input type="text" placeholder="Name or User Name" onChange={this.handleInput} name='userName'value={this.state.userName}/>
        <input type="text" placeholder="Artist or Band Name" onChange={this.handleInput} name='songArtist' value={this.state.songArtist} />
        <input type="text" placeholder="Song Title" onChange={this.handleInput} name='songTitle' value={this.state.songTitle} />
        <textarea placeholder="notes" onChange={this.handleInput} name='songNotes' value={this.state.songNotes} />
        <input type="submit" />
      </form>
    )
  }

}
