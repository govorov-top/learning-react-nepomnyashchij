import React, { Component } from 'react';
import Posts from "./Posts";

class OutputPosts extends Component {
    state = {
        posts: [
            { id: 'abc1', name: 'JS Basics' },
            { id: 'abc2', name: 'JS Advanced' },
            { id: 'abc3', name: 'Recat JS' },
        ]
    }

    handlePostDelete = (id) => {
        this.setState({
            posts: this.state.posts.filter(
                post => post.id !== id
            )
        })
    }
    render() {
        const { posts } = this.state;
        return (
            <div className="OutputPosts">
                {
                    posts.map((p,i) => (
                        <p key={p.id}>{p.name}</p>
                    ))
                }
                <hr/>
                {
                    <Posts posts={posts} postDelete={this.handlePostDelete}/>
                }
            </div>
        );
    }
}

export default OutputPosts;
