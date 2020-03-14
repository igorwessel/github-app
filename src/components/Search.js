import React, { Component } from 'react'

class Search extends Component {
    render(){
        return(
            <div className='search'>
                <input 
                type='search' 
                placeholder='Digite o nome do usuario do Github' />
            </div>
        )
    }
}

export default Search
