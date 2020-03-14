import React, { Component } from 'react'

class UserInfo extends Component{
    render(){
        return(
            <div className='user-info'>
                <img src='https://avatars1.githubusercontent.com/u/54173994?v=4' />
                <h1><a href='https://github.com/igorwessel'>Igor Wessel</a></h1>
                <ul className='repos-info'>
                    <li> Repositorios: 9</li>
                    <li> Seguidores: 1</li>
                    <li> Seguindo: 2</li>
                </ul>
            </div>
        )
    }
}

export default UserInfo
