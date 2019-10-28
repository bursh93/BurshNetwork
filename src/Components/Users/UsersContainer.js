




import React from 'react';
import {connect} from 'react-redux';

import {Users} from "./Users";
import {FollowAC, getUsersThunkCreator, setCurrentPageAC, UnFollowAC} from "../../Redux/Reducer/Users/usersReducer";




class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        console.log(this.props)
        return <>

                <Users
                        {...this.props}
                        follow={this.props.Follow}
                        unfollow={this.props.unFollow}
                        onPageChanged={this.onPageChanged}
                        setCurrentPage={this.props.setCurrentPage}
                />
        </>
    }
}

let mapStateToProps = (state) => {

    return {
        users:state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,


    }
}
let mapDispatchToProps=(dispatch)=> {
    return {
        getUsersThunkCreator:(currentPage, pageSize)=>{
            dispatch(getUsersThunkCreator(currentPage,pageSize))
        },
        Follow:(userId)=> {
            dispatch(FollowAC(userId))
        },
        unFollow:(userId)=> {
            dispatch(UnFollowAC(userId))
        },
        setCurrentPage:(page)=>{
            dispatch(setCurrentPageAC(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);