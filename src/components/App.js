import { React, Component } from 'react';
import Posts from './Posts';

export default class App extends Component
{
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Posts title="Aprendendo react, react eh demais" />
                <Posts title="React eh muito legal" />
                <Posts title="Aprenda em videos de react" />
            </div>
        )
    }
}