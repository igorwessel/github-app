import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserInfo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='user-info'>
                <img src={this.props.userinfo.photo} />
                <h1>
                    <a href={`https://github.com/${this.props.userinfo.login}`}>
                    {this.props.userinfo.name}
                    </a>
                </h1>
                <ul className='repos-info'>
                    <li> Repositorios: {this.props.userinfo.repos}</li>
                    <li> Seguidores: {this.props.userinfo.followers}</li>
                    <li> Seguindo: {this.props.userinfo.following}</li>
                </ul>
            </div>
        )
    }
}

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired 
    })
}

export default UserInfo
