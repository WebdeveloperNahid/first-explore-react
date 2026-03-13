
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Player name = 'Nahid' runs = "500" ></Player>
      <Player name = 'Sayed' runs = "444"  ></Player>
      <Player name = 'Jahid' runs = "554"  ></Player>
      <Webdeveloper name = "Omarfaruk" tech = "JavaScript" ></Webdeveloper>
    
    </>
  )
}

function Player ({name, runs}) {

  return(
    <div className='student'>
      <h2>Name: {name} </h2>
      <h3>Runs: {runs} </h3>
    </div>
  )
}
function Webdeveloper ({name, tech}) {

  return(
    <div style={{
      color: "green",
      background: "white",
      border: "12px solid blue",
      borderRadius: "30px",
    }}>
      <h2>Name: {name} </h2>
      <h3>Tech Use: {tech} </h3>
    </div>
  )
}





export default App
