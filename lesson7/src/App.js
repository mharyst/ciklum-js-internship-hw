import React, { Component } from 'react';
import Video from './VideoItem';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [
      {
        id: 1,
        title: 'Rock on',
        service: 'vimeo',
        video: 'https://player.vimeo.com/video/183482793',
        comments: [
          {
            id: 1,
            text:'Cool!!'
          }, {
            id: 2,
            text: 'Nice'
          }],
      }, {
        id: 2,
        title: 'Common bastard....',
        service: 'vimeo',
        video: 'https://player.vimeo.com/video/148177148',
        comments: [
          {
            id: 1,
            text: 'What\'s the song?'
          }, {
            id: 2,
            text: 'Wow'
          }],
      }, {
        id: 3,
        title: 'Moving on',
        service: 'vimeo',
        video: 'https://player.vimeo.com/video/151715092',
        comments: [
          {
            id: 1,
            text:'Great'
          }, {
            id: 2,
            text: 'Like it'
          }, {
            id: 3,
            text: ':)'
          }],
      }]
    }
  }
  render() {
    const mainVideoSection = {
      display: 'flex',
      flexWrap: 'wrap',
      backgroundColor: "#fff",
      margin: 80
    };

    const items = this.state.videos.map((value, index) => {
      return <Video key={index} data={value}/>
    })

    return (
      <div className={"test"} style={mainVideoSection}>{items}</div>
    );
  }
}
