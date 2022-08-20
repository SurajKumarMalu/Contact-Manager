import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '.style.css';

function Addmember(){
 const [person,setPerson]=useState("");
  
    function handlechange(e){
       setPerson(e.target.value);
    }
    function handleSubmit(e){
      e.preventDefault();
    }
    return(
      <form onSubmit= {handleSubmit}>
        <input type="text" placeholder="Add New Contact" onChange={handleChange} value={person.name} />
        <button type="Submit">Add</button>
      </form>
    );}

    function People(props){
      const arr=props.data;
      const list=arr.map((val,index)=>
      <li key={index}>{val}</li>
      );
      return <ul>{list}</ul>;
    }
const contacts=["Suraj","Kiran"];
const el=(<div>
     <Addmember />
     <People data={contacts} />
     </div>
  );
ReactDOM.render(
  el,document.getElementById("root")
);
