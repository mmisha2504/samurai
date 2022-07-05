import React from 'react';
import Preloader from '../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props)=> {

  if (!props.profile) {
    return(<div> <Preloader/>
    </div>)
  }

    return (
            <div>
      <div>
        <img src="https://mindinvest.ru/wp-content/uploads/golandia.jpg" alt="Голландия" />
      </div>
      <div>
        <img src={props.profile.photos.large}/>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
     
    </div> 
    )
}

export default ProfileInfo;