import { useState , useEffect } from "react";
import Profile from "./Profile";



const Search =() => {
   
    const [data,setData] = useState();
    const [term,setTerm] = useState();
    const [repo,setRepo] = useState();

   const onChangeHandler = e => {
     setTerm(e.target.value);
   }
    

   const submitHandler = async e => {
     e.preventDefault();

      const profile = await fetch(`https://api.github.com/users/${term}`);
      const profileJson = await profile.json();

      const repo = await fetch(profileJson.repos_url);
      const repoJson = await repo.json();
        console.log(profileJson)
      if(profileJson){
        setData(profileJson);
        setRepo(repoJson);
      }



   };
   

   
  return (
    <div className="ui form">
        <div className="field">
      <form className="user-form" id="form">
        
     <input type="text" onChange={onChangeHandler} placeholder="search username here..."></input>
     <button type="submit" onClick={submitHandler}>Search</button>
      </form>
      </div>
      {data &&  <Profile data={data}/>}
    </div>
    
  );
}

export default Search;
