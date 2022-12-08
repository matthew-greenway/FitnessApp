/* Code from https://www.youtube.com/watch?v=Xcet6msf3eE&t=237s
 * Web Dev Simplified
 * "How to Build a Better Spotify with React"
 */
import Login from './Login'
import Dashboard from './Dashboard'

// Gets the code from the URL after login
const code = new URLSearchParams(window.location.search).get('code')

// Renders screen based on if an access code is in the URL
export default function Spotify() {
  return  code ? <Dashboard code={code} /> : <Login />
}

