import { extendObservable } from 'mobx';
var axios = require("axios");

export default class TrackStore {
  constructor() {
    this.trackObj;
    extendObservable(this, {
      spotifyTracks: {
        tracks: {
          items: []
        }
      },
      get processedTracks (){
        console.log(this.trackObj);

      this.spotifyTracks.tracks.items.slice(0, 3).forEach((e, i)=>{
          let trackid = e.track.id;
          let matchTrack = this.trackObj.find((track)=>{
            return track.trackId===trackid;
          });
          if (matchTrack){
          e.playCount = matchTrack.playCount;
          } else {
            e.playCount = 0
          }

    })
    return this.spotifyTracks;
  }
})
       // wrap your
      // logic fetching all the weather api data into a method.

    let trackCall = axios.get('/tracks/')

    let spotifyCall = axios.get('/spotify')

      Promise.all([trackCall, spotifyCall]).then(([trackObj, spotifyObj])=>{
        this.trackObj = trackObj.data; 
        this.spotifyTracks = spotifyObj.data;
       
      })
    }
  }


