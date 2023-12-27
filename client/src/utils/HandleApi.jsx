import axios from 'axios'

const baseUrl="http://localhost:3000"

const getAllToDo=(setToDo)=>{
    axios.get(baseUrl)
    .then(( {data})=>{
        console.log('data ->>>',data)
        setToDo(data)
    })
}


const addToDo=(text,setToDo,setText)=>{
  axios.post(
    `${baseUrl}/save`,{text}
  )
  .then((data)=>{
    console.log(data)
    setText("")
    getAllToDo(setToDo)
  })
}
export {getAllToDo,addToDo}