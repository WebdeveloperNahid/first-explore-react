
import './App.css'
import ToDo from './Todo';
import Actor from './actors';
import Singing from './sing';
import Counter from './count';
import Posts from './posts';
import { Suspense } from 'react';


//posts

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

function App() {
  const postPromise = fetchPosts()

   const actors = ["salman sha","Riyaz","Fredoj","Amin khan","Sakib khan"];
   const singers = [
    {id: 1 , name : "Dr . Mafuz", age : 68},
    {id: 2 , naem : "Tasan", age :45},
    {id:3 , name : "Shuvro Deb", age: 57}
   ]

  // butoon handleing arrow Funciton 
   const handelClick = () => {
    alert("button clicked.Done")

    
    }

    // button function er vitor add or maltiply ,division ,etc korar jonoo  arrow function er use case System

    const handleClickadd5 = (num) =>{
      const newNum = num + 5;
      alert(newNum);

   }
 

  return (
    <>
      <h1>Vite + React</h1>
      <Suspense fallback = { <h3> Post are Comming.....</h3>} >
        <Posts postPromise = {postPromise} ></Posts>
      </Suspense>
      <Player name = 'Nahid' runs = "500" ></Player>
      <Player name = 'Sayed' runs = "444"  ></Player>
      <Player name = 'Jahid' runs = "554"  ></Player>
      <Webdeveloper name = "Omarfaruk" tech = "JavaScript" ></Webdeveloper>

      <ToDo task = "Learn React" isDone = {true} ></ToDo>
      <ToDo task = "Revise Js" isDone = {false}></ToDo>
      <ToDo task = "Take a shower" isDone = {true} ></ToDo>
      <ToDo task = "allreaddy Completed class" isDone = {true} ></ToDo>
      <ToDo task = "try to complet classes" isDone = {false} ></ToDo>

      {/* Map() er User case with Array*/}

      <ul>
        {
          actors.map(actor => (
            <Actor  actor={actor} ></Actor>
          ))
        }
      </ul>

      {/* object use case  */}

      {
        singers.map(singer => <Singing key = {singer.id} singer={singer} ></Singing> )
      }
      
      {/* *****simple arrow function btn*** */}
      <button onClick={handelClick} >click me!</button>

      {/* btn arrow function but add, multiply,devi, biyog etc Ai system use korle Parameter hisebe patano jai & button click korar por Run hoi,, other wise direcly arrow function er modde parametter dile button er click korar agei Run hoye jai*/}

     {
       <button onClick={() => handleClickadd5 (10) } >Click me  add 5+ = </button>

     }

    {/* Count ++  */}

     <Counter ></Counter>

    
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
