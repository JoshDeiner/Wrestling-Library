import React from 'react'
import YouTube from 'react-youtube';


export default class YoutubeComponent extends React.Component {
  render() {

    const opts = {
      height: '650',
      width: '1100',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId= 'RC5NXREEq9A'
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(e) {
    // console.log(event);
    // access to player in all event handlers via event.target
    e.target.setLoop();
  }
}
