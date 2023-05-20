import React from 'react';
import Card from './Card';
import useSearch from '../Hooks/useSearch';
const SearchUser = () => {

const {submitHandler,inputHandler,profile,repos,flag,username} = useSearch();

  return (
    <>
    
      <div className="input-box">
        <input type="text" value={username} style={{color:"white"}} placeholder="Search here..." onChange={inputHandler} />
        <button className="button" onClick={submitHandler}>
          Search
        </button>
      </div>
      {flag && <Card user={profile} repos={repos}  username={username} />}
      
    </>
  );
};

export default SearchUser;
