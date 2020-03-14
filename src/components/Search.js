import React, { Component } from 'react'
import PropsTypes from 'prop-types'

class Search extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='search'>
                <input 
                type='search' 
                placeholder='Digite o nome do usuario do Github' 
                onKeyUp={this.props.handleSearch}
                onChange={(e) => {
                    console.log('change', e.target.value)
                }}/>
            </div>
        )
    }
}

Search.propTypes = {
    handleSearch: PropsTypes.func.isRequired
}

export default Search
