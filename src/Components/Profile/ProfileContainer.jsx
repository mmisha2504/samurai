import {compose} from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus } from '../../Redux/profile-reducer';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component {

componentDidMount(){
  let userId = this.props.router.params.userId;
  if (!userId) {
        userId=this.props.authorizedUserId;
  };
  this.props.getUserProfile(userId);
    this.props.getStatus(userId)
  }
  
 render(){

    return (
      <Profile {...this.props} 
      profile={this.props.profile} 
      status={this.props.status} 
      updateStatus={this.props.updateStatus} 
      />
    )
 }
}

let mapStateToProps = (state)=>({
  profile:state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId
});



function withRouter(ProfileContainer) {
 function ComponentwithRouter(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <ProfileContainer
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentwithRouter;
}
export default compose (connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
withRouter) (ProfileContainer);