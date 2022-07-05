import React from 'react';
import { Navigate } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo';


const Profile = (props)=> {
  if (props.isAuth == false) {
    return <Navigate to={'/login'}/>
}
  return (
      <div className={s.content}> 
        <ProfileInfo 
          profile={props.profile} 
          status={props.status} 
          updateStatus={props.updateStatus} />
        <MyPostsContainer />
      </div> 
    )
}

export default Profile;