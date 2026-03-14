
import './App.css'
import ToDo from './Todo';
import Actor from './actors';




function App() {

   const actors = ["salman sha","Riyaz","Fredoj","Amin khan","Sakib khan"];

  return (
    <>
      <h1>Vite + React</h1>
      <Player name = 'Nahid' runs = "500" ></Player>
      <Player name = 'Sayed' runs = "444"  ></Player>
      <Player name = 'Jahid' runs = "554"  ></Player>
      <Webdeveloper name = "Omarfaruk" tech = "JavaScript" ></Webdeveloper>

      <ToDo task = "Learn React" isDone = {true} ></ToDo>
      <ToDo task = "Revise Js" isDone = {false}></ToDo>
      <ToDo task = "Take a shower" isDone = {true} ></ToDo>
      <ToDo task = "allreaddy Completed class" isDone = {true} ></ToDo>
      <ToDo task = "try to complet classes" isDone = {false} ></ToDo>

      {/* Map() er User case */}

      <ul>
        {
          actors.map(actor => (
            <Actor  actor={actor} ></Actor>
          ))
        }
      </ul>

     
    
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
