import { React, Component } from 'react';
import Comment from './Comment';

export default class Posts extends Component
{
    constructor(props) {
        super(props);
        
        this.state = {
            comments: [],
            newComment: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNewComment = this.handleNewComment.bind(this);
    }


    handleSubmit(e) {
        this.setState({
            comments: [
                ...this.state.comments,
                { text: this.state.newComment }
            ] 
        })

        this.setState({ newComment: '' })

        e.preventDefault();
    }

    handleNewComment(e) {
        this.setState({
            newComment: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleNewComment} />
                    <button type="submit">Comentar</button>
                </form>
                {this.state.comments.map((comment, index) => {
                    return <Comment key={index} text={comment.text} />
                })}
                <Comment text="Bom comentario"/>
            </div>
        )
    }
}