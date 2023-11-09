import { useState } from 'react'

import './App.css'

import ques from './data'
import SingleQuestion from './Question';


function App() {

  const [test, setTest] = useState(false)
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  // const [info, setinfo] = useState(true)

  const handleSubmit = (e) => {

    e.preventDefault()

    const newItem = {id: new Date().getTime().toString(), title:name};
    setList([...list,newItem]);
    setName('')



  }


  return (
    <>


    <button onClick={() => setTest(!test)} >
      
      {test ? <p>edit</p> : <p>submit</p>}

      {console.log(test)}

    </button>



    {ques.map((ques)=>
        {
          return <SingleQuestion key={ques.id} {...ques}/>


        }
        
        )}



    

    <form onSubmit={handleSubmit}>
    <input placeholder='add task...' value={name} onChange={(e)=>setName(e.target.value)}/>

        <button type='submit'>

          submit
        </button>

        



    </form>


    <div className="grocery">

      {list.map((item) =>{

        const {id,title} = item

        return(

          <article key={id}>

            <p>{title}</p>
          </article>

        )
      })}
    </div>






    
      
    </>
  )
}

export default App
