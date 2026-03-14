export default function ToDo ({task,isDone, time = 0}) {
    if (isDone === true) {
        return <li>Done: {task} </li>
    }else{
        return <li>Do now : {task} </li>
    }
}