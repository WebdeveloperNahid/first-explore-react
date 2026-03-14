export default function Singing ({singer}) {
    console.log(singer)
    return (
        <div className="singer">
            <h2>Name: {singer.name} </h2>
            <p>age: {singer.age} </p>
        </div>
    )
}