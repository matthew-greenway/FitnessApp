/* Code from https://www.youtube.com/watch?v=Xcet6msf3eE&t=237s
 * Web Dev Simplified
 * "How to Build a Better Spotify with React"
 * 
 * Handles token authorization
 */
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code,
        }).then(res => {
            // gets all my tokens
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, '/')
        }).catch(() => {
            //window.location = '/'
        })
    }, [code])

    /* Whenever refresh token changes or exipires in changes*/
    useEffect(() => {
        if(!refreshToken || !expiresIn) return
        const interval = setInterval(() => {
            axios.post('http://localhost:3001/refresh', {
                refreshToken,
            }).then(res => {
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
            }).catch(() => {
                //window.location = '/'
            })
        }, (expiresIn - 60) * 1000 )

        return () => clearInterval(interval)
    }, [refreshToken, expiresIn])

    return accessToken
}