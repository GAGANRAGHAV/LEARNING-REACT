import { useState } from 'react'


const Question = ({title,info}) => {

  const [detail , setDetail] =  useState(false)

  return (
    <>
    
   <div> 

    <p>Title: {title} </p>

    <button onClick={()=>setDetail(!detail)}>

      {detail ? 'hide' : 'show'}
    </button>

    {
      detail &&
      <p> {info}</p>
    
  }


   </div>


    </>
  )
}

export default Question