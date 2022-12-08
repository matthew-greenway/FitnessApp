/* Code from https://www.youtube.com/watch?v=Xcet6msf3eE&t=237s
 * Web Dev Simplified
 * "How to Build a Better Spotify with React"
 * 
 * Main menu button implemented by Matthew Greenway
 */
import React from 'react';
import { useState } from 'react'
import '../App.css';
import App from '../App.js';

//client id = 2387a2a4c594439a9f66f97fb886ca59
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=2387a2a4c594439a9f66f97fb886ca59&response_type=code&redirect_uri=https://cpsc3720-fitness-app.herokuapp.com/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    const [chooseMainMenu, setChooseMainMenu] = useState(false)

    function handleMainMenu() {
        setChooseMainMenu(true)
    }
    console.log(AUTH_URL)
    if(!chooseMainMenu) {
        return (
            <div className='container'>
                <h1>
                    <a href={AUTH_URL}>
                    <button style={{ width: 420, backgroundColor: '#F56600', marginTop: 20, minHeight: 150, }}>
                        <h2 >Login With Spotify</h2>
                    </button>
                    </a>
                </h1>
                <button style={{ width: 420, backgroundColor: '#522D80', marginTop: 20, minHeight: 150, }} onClick={handleMainMenu}>
                    <center>
                        <h2 > Main Menu </h2>
                    </center>
                </button>
                
            </div>
            )
    }
    else {
        return (<App/>)
    }
}
