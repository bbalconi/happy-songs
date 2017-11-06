import React, { Component } from 'react';
import AlbumCover from './AlbumCover.js';
import Artist from './Artist';
import Popularity from './Popularity';
import TrackName from './TrackName';
import { Media } from 'reactstrap';
import Play from './Play';
import { observer, inject} from 'mobx-react';

import './tracks.css';

var trackBlock = observer(class TrackBlock extends Component{
  render(){ 
    console.log(this.props.trackStore.processedTracks);
    this.props.trackStore.processedTracks.map((track, i)=>{
      albums.push(<div key={i}>
        <AlbumCover trackid={trackid} cover={track.album.images[0].url} link={track.album.external_urls.spotify} /> 
        <Play getUser={this.props.getUser} trackid={trackid} link={track.artists["0"].external_urls.spotify} playCount={playCount} />
        <Media body>
          <Artist trackid={trackid} name={track.artists["0"].name} link={track.artists["0"].external_urls.spotify} />
          <Media heading>
            <TrackName trackid={trackid} link={track.external_urls.spotify} name={track.name} playCount={playCount} /> 
          </Media>
          
        </Media> 
        </div>);
    })
   
    return(
      <div>
        <Media>
        pizza
        </Media>
      </div>
    );
  };
})

export default inject('trackStore')(trackBlock);
