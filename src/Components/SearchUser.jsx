import React from 'react';
import Card from './Card';
import useSearch from '../Hooks/useSearch';
import { RotatingLines } from 'react-loader-spinner'

const SearchUser = () => {

  const { submitHandler, inputHandler, profile, repos, flag, username, isLoading } = useSearch();
  console.log(profile)
  return (
    <>

      <div className="input-box">
        <input type="text" value={username} style={{ color: "white" }} placeholder="Search here..." onChange={inputHandler} />
        <button className="button" onClick={submitHandler}>
          Search
        </button>
      </div>
      {isLoading ? <RotatingLines /> : (profile.message === "Not Found") ? <div className='no-user'>No Profile Found</div> : (profile.login && flag) && <Card user={profile} repos={repos} username={username} />}

    </>
  );
};

export default SearchUser;
