import './App.css';




// route pour les personnes
function Peoples() {
  fetch('https://swapi.dev/api/people/').then((response) => {
    response = response.json()
    response.then((result) => {
      console.log(result.results[0].name)
    })
  })
}

// route pour les planets
function Planets() {
  fetch('https://swapi.dev/api/planets/').then((response) => {
    response = response.json()
    response.then((result) => {
      console.log(result.results[0].name)
    })
  })
}

// route pour les films
function Films() {
  fetch('https://swapi.dev/api/films/').then((response) => {
    response = response.json()
    response.then((result) => {
      console.log(result.results[0].title)
    })
  })
}

// route pour les species
function Species() {
  fetch('https://swapi.dev/api/species/').then((response) => {
    response = response.json()
    response.then((result) => {
      console.log(result.results[0].name)
    })
  })
}

// route pour les Vehicles
function Vehicles() {
  fetch('https://swapi.dev/api/vehicles/').then((response) => {
    response = response.json()
    response.then((result) => {
      console.log(result.results[0].name)
    })
  })
}

// route pour les Vaisseaux
function Starships() {
  fetch('https://swapi.dev/api/starships/').then((response) => {
    response = response.json()
    response.then((result) => {
      console.log(result.results[0].name)
    })
  })
}


// mon rendu visuelle
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <input type="text" placeholder="Un personnage?"></input>
        <button onClick={Peoples}>
          Rechercher
        </button>
        <h1>Liste de tous les personnages de STARWARS</h1>
      </header>
      <p>ici</p>
    </div>
  );
}

export default App;
