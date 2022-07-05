import React from "react";
import { connect } from "react-redux";
import {follow, setCurrentPage, unfollow,  toggleFollowingProgress, getUsersThunkCreator} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../Redux/users-selectors';

class UsersC extends React.Component {

   componentDidMount() {
   
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
   }
   
      onPageChanged = (pageNumber) => {
         
         this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
      }
  
      render() {
          return <> 
          {this.props.isFetching ? <Preloader/> : null}
          <Users
           totalUsersCount={this.props.totalUsersCount} 
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
          />
          </>
      }
  }
  

// let mapStateToProps = (state)=>{
//    return {
//       users: state.usersPage.users,
//       pageSize: state.usersPage.pageSize,
//       totalUsersCount: state.usersPage.totalUsersCount,
//       currentPage: state.usersPage.currentPage,
//       isFetching: state.usersPage.isFetching,
//       followingInProgress: state.usersPage.followingInProgress,
//       isAuth: state.auth.isAuth
//    }
// }

let mapStateToProps = (state)=>{
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
      isAuth: state.auth.isAuth
   }
}


export default compose ( connect (
   mapStateToProps, 
   { follow,
      unfollow,
      setCurrentPage,
      toggleFollowingProgress,
      getUsersThunkCreator
    }))
      (UsersC)
   ;