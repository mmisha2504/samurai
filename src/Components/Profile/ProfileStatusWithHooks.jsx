import { render } from '@testing-library/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Preloader from '../common/Preloader/Preloader';
import Clicker from './Clicker';

const ProfileStatusWithHooks = (props) => {

    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

        useEffect(()=>{
            setStatus(props.status)
        }, [props.status])
       
    const activateEditMod = ()=>{
        setEditMode(true);
    }

    const deActivateEditMode = () => { 
        setEditMode(false);
        props.updateStatus(status);
    
    }      
    const onStatusChange = (e)=> {
        setStatus(e.currentTarget.value)
    }
        
        

      return ( 
  <div>
  { ! editMode &&
        <div>
            <span onDoubleClick={activateEditMod} > {props.status || '-----'} hyi</span>
        </div>
    }
     { editMode &&
       <div>
            <input autoFocus={true}
             onBlur={deActivateEditMode}
             onChange={onStatusChange}
             value={status}
             />
        </div>
     }

{/* <Clicker/> */}

    </div>
    )
}

  
export default ProfileStatusWithHooks;