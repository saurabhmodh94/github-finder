import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {} from '../types';

const GithubState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider value={{}}>{props.children}</GithubContext.Provider>
  );
};

export default GithubState;
