import { useState } from 'react'
import './App.css'

import ques from './data'
import items from './data1';

import SingleQuestion from './Question';
import Navb from './navbar';



function App() {

  const [test, setTest] = useState(false)
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [menuItems, setMenuItems] = useState(items);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  // const [info, setinfo] = useState(true)

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  const filterItem= (categItem) => {

    if (categItem === 'all')
    {
      setMenuItems(items);
      return;

    }

    const newItems = items.filter((item) => item.category === categItem);
    setMenuItems(newItems);

    
    };
  
    const removeItem = (id)=>{

      
      setList(list.filter((item)=>item.id !== id));

    };

  const handleSubmit = (e) => {

    e.preventDefault()

    const newItem = {id: new Date().getTime().toString(), title:name};
    setList([...list,newItem]);
    setName('')



  }


  return (
    <>

    {/* <Navbar/> */}

    <Navb/>

    <hr></hr>

    <h1>hello</h1>


    <button onClick={() => setTest(!test)} >
      
      {test ? <p>edit</p> : <p>submit</p>}

    

    </button>


    <h1><u>QNA</u></h1>

    {ques.map((ques)=>
        {
          return <SingleQuestion key={ques.id} {...ques}/>


        }
        
        )}


<h1><u>TO DO</u></h1>

    

    <form onSubmit={handleSubmit}>
    <input placeholder='add task...' value={name} onChange={(e)=>setName(e.target.value)}/>

        <button type='submit' onClick={()=>setIsEditing(!isEditing)}>

        {isEditing ? 'edit' : 'submit'}
        </button>

        



    </form>


    <div className="grocery">

      {list.map((item) =>{

        const {id,title} = item

        return(

          <article key={id}>

            <p>{title}</p>
            <button onClick={()=> removeItem(id)}>delete</button>
            <button onClick={()=> editItem(id)}>edit</button>

          </article>

        )
      })}
    </div>


<h1><u>MENU</u></h1>

<div className="btns">

  <button onClick={()=> filterItem('breakfast')}>BREAKFAST</button>
  <button onClick={()=> filterItem('lunch')}>LUNCH</button>
 
  <button onClick={()=> filterItem('shakes')}>SNACKS</button>
  <button onClick={()=> filterItem('all')}>ALL</button>


<div>

 {console.log(menuItems)}

  {menuItems.map((item)=>{

    const {id,title,img,price ,desc} = item;

    return(
    <article key={id}>
      <p>{title}</p>
      <img src={img}  />
      <p>{desc}</p>
      <p>{price}</p>


    </article>

    )
  })}
</div>
</div>



    
      
    </>
  )
}

export default App
