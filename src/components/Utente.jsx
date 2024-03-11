
function Utente ({ nome, isUtente = false }) {
  if(isUtente) {
    return <h2>Benvenuto {(nome === 'gabriele') ? 'GABRIELE' : nome}</h2>
  }
  return <p style={{fontFamily: "Helvetica, Arial"}}>{nome}</p>
}

export default Utente
