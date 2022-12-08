import React from 'react'
import { useState, useEffect } from 'react'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import TrackSearchResult from './TrackSearchResult'
import Player from './Player'
import SpotifyPlayer from 'react-spotify-web-playback'

const spotifyApi = new SpotifyWebApi({
    clientId: '2387a2a4c594439a9f66f97fb886ca59',
})

const homePage = 'http://localhost:3000'

export default function Dashboard({ code }) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingtrack] = useState([])
    const [choosePlaylists, setChoosePlaylists] = useState(false)
    const [chooseTopSongs, setChooseTopSongs] = useState(false)
    const [chooseSearchSongs, setChooseSearchSongs] = useState(false)
    const [chooseMainMenu, setChooseMainMenu] = useState(false)
    const [artistID, setArtistID] = useState('')
    const [market, setMarket] = useState('')
    const [play, setPlay] = useState(false)

    // Handles Search by Playlist button back end
    function fChoosePlaylists() {
        setChoosePlaylists(true)
        setChooseTopSongs(false)
        setChooseSearchSongs(false)
        setChooseMainMenu(false)
        setSearch('')
    }
    // Handles Search Top Songs by Artist button back end
    function fChooseTopSongs() {
        setChooseTopSongs(true)
        setChooseSearchSongs(false)
        setChooseMainMenu(false)
        setChoosePlaylists(false)
        setSearch('')
    }
    // Handles Search Songs button back end
    function fChooseSearchSongs(){
        setChooseSearchSongs(true)
        setChooseMainMenu(false)
        setChoosePlaylists(false)
        setChooseTopSongs(false)
        setSearch('')
    }
    // Handles Main Menu button back end
    function fChooseMainMenu(){
        setChooseMainMenu(true)
        setChooseSearchSongs(false)
        setChoosePlaylists(false)
        setChooseTopSongs(false)
    }

    function chooseTrack(track) {
        setPlayingtrack(track)
    }

    useEffect(() => {
        if(!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    /* Search Songs code from https://www.youtube.com/watch?v=Xcet6msf3eE&t=237s 
     * Web Dev Simplified
     * "How to Build a Better Spotify with React"
     * 
     * All other search options were written by Matthew Greenway
     * 
     * Searches based on which button is clicked and when the search bar is changed
     */
    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        if (chooseSearchSongs) {
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            console.log(res)
            setSearchResults(
            res.body.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce((smallest,image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                }, track.album.images[0])

                return {
                   artist: track.artists[0].name,
                   title: track.name,
                   uri: track.uri,
                   albumUrl: smallestAlbumImage.url
                }
            }))
        })}
        if (choosePlaylists) {
            spotifyApi.searchPlaylists(search).then(res => {
                if (cancel) return
                console.log(res)
                setSearchResults(
                res.body.playlists.items.map(items => {
                    const smallestAlbumImage = items.images.reduce((smallest,image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    }, items.images[0])
    
                    return {
                        artist: items.name, // playlist name
                        title: items.description, // playlist description
                        uri: items.uri,
                        albumUrl: smallestAlbumImage.url, //uncaught type error here?
                        id: items.id
                    }
                }))
            })}
        if (chooseTopSongs) {
            spotifyApi.searchArtists(search).then(res => {
                if (cancel) return
                console.log(res)
                setArtistID(res.body.artists.items[0].id)
                setMarket('US')
            })
            console.log(artistID)
            spotifyApi.getArtistTopTracks(artistID, market).then(res => {
                console.log(res)
                setSearchResults(
                res.body.tracks.map(tracks => {
                    const smallestAlbumImage = tracks.album.images.reduce((smallest,image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    }, tracks.album.images[0])
        
                    return {
                        artist: tracks.artists[0].name, 
                        title: tracks.name, 
                        uri: tracks.uri,
                        albumUrl: smallestAlbumImage.url
                    }
                }))
            })}

        return () => cancel = true
    }, [search,accessToken])
    /* Matthew Greenway wrote this with some shared code from the youtube video
     * 
     * Searches for playlists by description
     */
    if (choosePlaylists) {
        return (
            <h1>
                <button style={{ width: 300, backgroundColor: '#F56600', marginTop: 20, minHeight: 100, }} onClick={fChoosePlaylists}>
                    <center>
                        <h6>Search by Playlist</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <button style={{ width: 300, backgroundColor: '#522D80', marginTop: 20, minHeight: 100, }} onClick={fChooseTopSongs}>
                    <center>
                        <h6>Top Songs by Artist</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <button style={{ width: 300, backgroundColor: '#F56600', marginTop: 20, minHeight: 100, }} onClick={fChooseSearchSongs}>
                    <center>
                        <h6>Search by Song</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <a href={homePage}>
                    <button style={{ width: 300, backgroundColor: '#522D80', marginTop: 20, minHeight: 100, }} onClick={fChooseMainMenu}>
                        <center>
                            <h6>Main Menu / Log Out</h6>
                        </center>
                </button>
                </a>
                <div className="search2">
                    <input value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Search Playlists'
                        type="text"
                    />
                </div>&nbsp;
                <div className='container2'>
                    <div className='poopoo'>
                        {searchResults.map(track => (
                            <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                        ))}
                    </div>
                </div>&nbsp;
                <div className='poopoo'>
                    Select a Song and Hit Play!
                    <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
                </div>
            </h1> 
        )
    }
    /* Matthew Greenway wrote this with some shared code from the youtube video
     * 
     * Searches for top songs by artist when clicked
     */
    else if (chooseTopSongs) {
        return (
            <h1>
                <button style={{ width: 300, backgroundColor: '#F56600', marginTop: 20, minHeight: 100, }} onClick={fChoosePlaylists}>
                    <center>
                        <h6>Search by Playlist</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <button style={{ width: 300, backgroundColor: '#522D80', marginTop: 20, minHeight: 100, }} onClick={fChooseTopSongs}>
                    <center>
                        <h6>Top Songs by Artist</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <button style={{ width: 300, backgroundColor: '#F56600', marginTop: 20, minHeight: 100, }} onClick={fChooseSearchSongs}>
                    <center>
                        <h6>Search by Song</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <a href={homePage}>
                    <button style={{ width: 300, backgroundColor: '#522D80', marginTop: 20, minHeight: 100, }} onClick={fChooseMainMenu}>
                        <center>
                            <h6>Main Menu / Log Out</h6>
                        </center>
                </button>
                </a>
                <div className="search2">
                    <input value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Search Artists'
                        type="text"
                    />
                </div>&nbsp;
                <div className='container2'>
                    <div className='poopoo'>
                        {searchResults.map(track => (
                            <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                        ))}
                    </div>
                </div>&nbsp;
                <div className='poopoo'>
                    Select a Song and Hit Play!
                    <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
                </div>
            </h1>
        )
    }
    /* Code from https://www.youtube.com/watch?v=Xcet6msf3eE&t=237s
     * Web Dev Simplified
     * "How to Build a Better Spotify with React"
     * 
     * After Search Songs button is clicked this runs
     */
    else if(chooseSearchSongs) {
        return (
            <h1>
                <button style={{ width: 300, backgroundColor: '#F56600', marginTop: 20, minHeight: 100, }} onClick={fChoosePlaylists}>
                    <center>
                        <h6>Search by Playlist</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <button style={{ width: 300, backgroundColor: '#522D80', marginTop: 20, minHeight: 100, }} onClick={fChooseTopSongs}>
                    <center>
                        <h6>Top Songs by Artist</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <button style={{ width: 300, backgroundColor: '#F56600', marginTop: 20, minHeight: 100, }} onClick={fChooseSearchSongs}>
                    <center>
                        <h6>Search by Song</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <a href={homePage}>
                    <button style={{ width: 300, backgroundColor: '#522D80', marginTop: 20, minHeight: 100, }} onClick={fChooseMainMenu}>
                        <center>
                            <h6>Main Menu / Log Out</h6>
                        </center>
                </button>
                </a>
                <div className="search2">
                    <input value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Search Songs/Artists'
                        type="text"
                    />
                </div>&nbsp;
                <div className='container2'>
                    <div className='poopoo'>
                        {searchResults.map(track => (
                            <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                        ))}
                    </div>
                </div>&nbsp;
                <div className='poopoo'>
                    Select a Song and Hit Play!
                    <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
                </div>
            </h1>
        )
    } 
    else {
        fChooseSearchSongs()
        return (
            <h1>
                <button style={{ width: 300, backgroundColor: '#F56600', marginTop: 20, minHeight: 100, }} onClick={fChoosePlaylists}>
                    <center>
                        <h6>Search by Playlist</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <button style={{ width: 300, backgroundColor: '#522D80', marginTop: 20, minHeight: 100, }} onClick={fChooseTopSongs}>
                    <center>
                        <h6>Top Songs by Artist</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <button style={{ width: 300, backgroundColor: '#F56600', marginTop: 20, minHeight: 100, }} onClick={fChooseSearchSongs}>
                    <center>
                        <h6>Search by Song</h6>
                    </center>
                </button>&nbsp;&nbsp;
                <a href={homePage}>
                    <button style={{ width: 300, backgroundColor: '#522D80', marginTop: 20, minHeight: 100, }} onClick={fChooseMainMenu}>
                        <center>
                            <h6>Main Menu / Log Out</h6>
                        </center>
                </button>
                </a>
                <div className="search2">
                    <input value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Search Songs/Artists'
                        type="text"
                    />
                </div>&nbsp;
                <div className='container2'>
                    <div className='poopoo'>
                        {searchResults.map(track => (
                            <TrackSearchResult track={track} key={track.uri} chooseTrack={chooseTrack} />
                        ))}
                    </div>
                </div>&nbsp;
                <div className='poopoo'>
                    Select a Song and Hit Play!
                    <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>
                </div>
            </h1>
        )
    }
}