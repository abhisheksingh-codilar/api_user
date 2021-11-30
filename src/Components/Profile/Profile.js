import React ,{useEffect,useState} from 'react';
import "./Profile.css";

export default function Profile({state}) {
    console.log(state);
    const [user,setUser] =  useState([]);
    var x=state;


    const getUsers= async() =>{
        const response = await fetch('https://reqres.in/api/users?page='+x);
        const data = await response.json();
        setUser (data.data);
        // console.log(data);
        console.log(x);
    
        // console.log(state);
        
    } 
  
    useEffect(() => {
      
      getUsers();
     
    },[x])

    // getUsers();
    return (
      <>
          <div className="cards">
               
  
  
          {
            user.map((el)=>{
              return(
                      
                    <div className=" card c1" key={el.id}>
              <div className="avatar a1">
                  <img src={el.avatar} alt="img"/>
              </div>
              <div className="text-name"> {el.first_name} {el.last_name}</div>
              <div className="mid">{el.email}</div>
          </div>
  
              )
            })
          }
  </div> 
      </>
    );
  
}
