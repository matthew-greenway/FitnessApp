/* Code from https://www.youtube.com/watch?v=Xcet6msf3eE&t=237s
 * Web Dev Simplified
 * "How to Build a Better Spotify with React"
 * 
 * Handles spotify player, slight edits made by Matthew Greenway
 */
import React from 'react'
import { useState, useEffect } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({ accessToken, trackUri }) {
    const [play, setPlay] = useState(false)
    
    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return <SpotifyPlayer 
        //autoPlay={true}
        token={accessToken}
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={true}
        uris={trackUri ? [trackUri] : []}
        />
}