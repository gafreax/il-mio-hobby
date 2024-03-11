import Sviluppo from './components/Sviluppo.jsx'
import Titolo from './components/Titolo.jsx'
import Guest from './Pages/Guest.jsx'
import Admin from './Pages/Admin.jsx'

import './App.css'

function isOspite(utente) {
  if (!utente || utente === "ospite") {
    return true
  }
  return false
}

function App () {
  const utente = localStorage.getItem('utente')
  const isSviluppo = document.cookie.indexOf("development") >= 0
  const Page = isOspite(utente) ? <Guest /> : <Admin />
  return <>
    <Titolo>il mio Hobby</Titolo>
    {Page}
    { isSviluppo && <Sviluppo />}
  </>
  
}

export default App
