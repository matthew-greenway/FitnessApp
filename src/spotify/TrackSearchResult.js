/* Code from https://www.youtube.com/watch?v=Xcet6msf3eE&t=237s
 * Web Dev Simplified
 * "How to Build a Better Spotify with React"
 * 
 * After Search Songs button is clicked this runs
 */
import React from 'react'

export default function TrackSearchResult({ track, chooseTrack}) {
    function handlePlay() {
        chooseTrack(track)
    }

    return (
        <div style={{ cursor: 'pointer' }} onClick={handlePlay}>
            <center>
                <img src={track.albumUrl} style={{height: '64px', width: '64px'}}/>
                <h6> {track.title} </h6>
                <h4> {track.artist} </h4>&nbsp;
            </center>

        </div>
    )
}