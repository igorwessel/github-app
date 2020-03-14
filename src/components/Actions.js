import React, { Component } from 'react'

class Actions extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='actions'>
                <button onClick={this.props.handleClickSeeRepository}>Ver repositorios</button>
                <button onClick={this.props.handleClickSeeRepoStarred}>Ver favoritos</button>
            </div>
        )
    }
}

export default Actions
