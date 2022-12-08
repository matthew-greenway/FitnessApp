/* Code from https://www.youtube.com/watch?v=Xcet6msf3eE&t=237s
 * Web Dev Simplified
 * "How to Build a Better Spotify with React"
 * 
 * Handles server for authorization
 */
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node');

const redirectURI = 'https://cpsc3720-fitness-app.herokuapp.com/'
const PORT = process.env.PORT || 3000
const app = express()
app.use(bodyParser.json())

const buildPath = path.join(__dirname, '..', 'build')
app.use(express.static(buildPath))

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    console.log("hi")
    const spotifyApi = new SpotifyWebApi( {
        redirectUri: redirectURI,
        clientId: '2387a2a4c594439a9f66f97fb886ca59',
        clientSecret: 'daa2e7aa27fa4fc7856d79d84348cab9',
        refreshToken
    })

    spotifyApi.refreshAccessToken().then(
        data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            })
        }).catch(() => {
            res.sendStatus(400)
        })
})

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi( {
        redirectUri: redirectURI,
        clientId: '2387a2a4c594439a9f66f97fb886ca59',
        clientSecret: 'daa2e7aa27fa4fc7856d79d84348cab9'
    })

    spotifyApi.authorizationCodeGrant(code).then((data) => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(err => {
        //console.log(er)
        res.sendStatus(400)
    })
})

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})
