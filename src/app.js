'use strict'
import React from 'react'
import Square from './square';
import Button from './button';

const Title = props => {
    return(
        <h1>Hello world with ES6</h1>
    );
}

function TitleWithES5(props){
    return(
        <h1>Hello world with ES5</h1>
    )
}

const App = props => {
    return(
        <div>
            <Button>Texto</Button>
        </div>
    )
}

export default App
