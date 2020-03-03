import React from 'react';
import  s from './Users.module.css';
import * as axios from 'axios';
import defaultAvatar from '../../../assets/image/user.png'

class Users extends React.Component {

    componentDidMount() {
        //axios.get("https://node-js-api-for-it-kamasuntra.herokuapp.com/users")
        axios.get(`https://node-js-api-for-it-kamasuntra.herokuapp.com/users?page=${this.props.currentPage}
                                                                     &count=${this.props.pageSize}`)
            .then(response => {
                this.props.SET_USERS(response.data.items);
                this.props.SET_TOTAL_COUNT(response.data.totalCount);
            });
    }
    onPageChange = (pageNumber)  => {
        this.props.SET_CURRENT_PAGE(pageNumber)
        //axios.get("https://node-js-api-for-isadt-kamasuntra.herokuapp.com/users")
        axios.get(`https://node-js-api-for-it-kamasuntra.herokuapp.com/users?page=${pageNumber}
                                                                     &count=${this.props.pageSize}`)
            .then(response => {
                this.props.SET_USERS(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages=[];
        for(let i = 1; pagesCount >= i; i++) {
            pages.push(i);
        }

        return (
            <div className={s.page}>
                <div className={s.pageNumbers}>
                    {pages.map( p =>
                        <span className={this.props.currentPage === p && s.currentPage }
                              onClick = { () => {this.onPageChange(p)} }>{p + ' '}</span>
                    )}
                </div>
                {
                    this.props.users.map ( u =>
                        <div key={u.id} className={s.userBlock}>
                        <div className={s.photoUrl}>
                            <img src={ u.photos.small != null ?  u.photos.small : defaultAvatar}/>
                        </div>
                            <button className={s.button}
                                    onClick={()=> u.followed == true ? this.props.UNFOLLOW(u.id) : this.props.FOLLOW(u.id)}>
                                    {u.followed == true ? 'UNFOLLOW' : 'FOLLOW'}
                            </button>
                        <div className={s.title}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={s.country}></div>
                        <div className={s.city}></div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;