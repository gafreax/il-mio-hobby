// versione errata
// Nei vari copia e incolla la graffa finale sulla dichiarazione della funzione mancava
//                        |
//                        v
// function Utente({nome})
//  return <h2>Benvenuto { (nome === "gabriele") ? "GABRIELE" : nome }</h2>
// }

// Qui ho messo la graffa finale :-)
function Utente ({ nome }) {
  return <h2>Benvenuto {(nome === 'gabriele') ? 'GABRIELE' : nome}</h2>
}

export default Utente
