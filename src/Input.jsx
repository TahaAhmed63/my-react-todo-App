import React from 'react';
import { useState } from 'react';
import "./style.css";
import {BiX} from "react-icons/bi";


// function Input() {
// const [items,setValue]=useState([]);
// const[inputValue,setInputValue]=useState('');

// function createItem(){
//   if (inputValue.trim() !== '') { 
//   const newItem=[...items,inputValue];

//   setValue(newItem);
//   setInputValue('');
// }
// }
// function remove(index){
//   const newItems = [...items];
//   newItems.splice(index, 1);
//   setValue(newItems);
 
// }
// function newItem(event){
//   setInputValue(event.target.value);
// }
function Input(){
  function scrollToBottom() {
    box.scrollTop = box.scrollHeight;
  }
  const [items,setValue]=useState([]);
  const[inputValue,setInputValue]=useState('')

  function createItem(){
    if(inputValue.trim()!==''){
      const newItem=[...items,inputValue];
      setValue(newItem)
      setInputValue('')
    }
  }
  function remove(index){
          const newItems=[...items];
          newItems.splice(index,1)
          setValue(newItems)
  }
  
  function newItem(event){
     setInputValue(event.target.value)
  }

  return (
  <div>
    <div className="container box">
      <div className="h1 text-center"><h1>Todo App</h1></div>
      
       <div className="input-box">
        <input type="text" value={inputValue} onChange={newItem}  />
      <button type="button" class="btn btn-primary btn-lg"  onClick={createItem} >Submit</button>
      </div>
      <div className="list-box">
      <ul>
        {items.map((item, index) => (
          <div className="list-style"> 
          <li   key={index}> {item} </li>
          <div className='icon w-90' > <BiX onClick={()=>remove(index)}/></div>
          </div>  
        ))}
      </ul>
      </div>
      
    </div>
  </div>
  );
}

export default Input;