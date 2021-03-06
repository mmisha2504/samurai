import { render } from '@testing-library/react';
import React from 'react';
import Preloader from '../common/Preloader/Preloader';

class ProfileStatus extends React.Component {

    state = {
    editMode : false,
    status: this.props.status
}
activateEditMode = () => { 
    this.setState({
        editMode: true
    });
}
deActivateEditMode = () => { 
    this.setState({
        editMode: false
    });
    this.props.updateStatus(this.state.status)
}
onStatusChange = (e)=> {
    this.setState({
        status: e.currentTarget.value
    })
}

componentDidUpdate(prevProps, prevState) {

   if (prevProps.status !== this.props.status){
    this.setState({status: this.props.status})
   }
    console.log ('componentDidUpdate');
}
            
render() {
    console.log ('RENDER');
      return ( 
  <div>
    {!this.state.editMode &&
        <div>
            <span onDoubleClick={ this.activateEditMode}> {this.props.status || '-----'} </span>
        </div>
    }
     { this.state.editMode &&
       <div>
            <input onChange={this.onStatusChange}
            onBlur = { this.deActivateEditMode } 
            value={this.state.status} />
        </div>
     }
    </div>
    )
}
}
  
export default ProfileStatus;