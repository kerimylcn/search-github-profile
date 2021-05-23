import { useEffect } from 'react';
import React from 'react';
import './Profile.css';

export default function Profile( { data } ) {

    useEffect(()=>{
          console.log(data)
    },[data])

     
 
     
            
    return (
      <div className="card-container">
        <span className="pro">GİTHUB</span>
        <img className="round" src={data.avatar_url} alt="user"></img>
          <h3>{data.username}</h3>
          <h6>{data.location}</h6>
          <p>{data.bio}</p>
          <a>followers : {data.followers}</a>

          <div className="buttons">
            
            <a href={data.html_url} style={{color:"red"}}>GO PROFİLE</a>
              <div className="skills">
              <h6></h6>
	
              </div>
          
          </div>
          
      </div>
        
    )

}
