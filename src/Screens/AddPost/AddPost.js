import React from 'react';
import PropTypes from 'prop-types';
import './AddPost.css';
import SignOut from '../Authentication/SignOut/SignOut';
import { updateLocalStorageUserData } from '../../utils/localStorageService';

const AddPost = () => {

  return (
  <div>
    <SignOut changeLoggedInStateHandler={(data, state) => updateLocalStorageUserData(data, state)}/>
    <h1 className="AddPost">
      Add Post 
    </h1>
  </div>
)};

export default AddPost;
