

import React from 'react'
import YouTube from 'react-youtube';


export default class YoutubeComponent extends React.Component {
  render() {
    console.log(this.props);

    const opts = {
      height: this.props.height,
      width: this.props.width,
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId= {this.props.url}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(e) {
    e.target.setLoop();
  }
}
