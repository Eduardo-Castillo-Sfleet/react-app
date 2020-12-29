import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';


class Posts extends React.Component {

    state = {
        posts: []
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        this.setState({posts: data})
    }

    render() {
        return(
            <div>
                <h1>Posts</h1>
                <DatePicker/>
                 {
                     this.state.posts.map(post => {
                         return (<div key={post.id}>
                             <h3>{post.title}</h3>
                             <p>{post.body}</p>
                         </div>)
                     })
                 }

            </div>
        )
    }

}

export default Posts;