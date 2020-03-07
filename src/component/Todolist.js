import React, { Component } from 'react';
import Todoitem from './Todoitem';

export default class Todolist extends Component {
    render() {
        return (
            <div>
                <h2>TO do list</h2>
                <Todoitem />
            </div>
        )
    }
}
