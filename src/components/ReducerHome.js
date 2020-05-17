import React from 'react';
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

class ReducerHome  extends React.Component{
    render() {
        const {posts} = this.props
        const postList=posts.length ? (posts.map((post) => {   
            return (
                <div key={post.id}> 
                    <NavLink to={'/reducer/' + post.id}>{post.name}</NavLink>
                    
                </div>  
            )
        })) : (<div>
            No Posts Yet
        </div>)
    return(<div>{postList}
               
            </div>)
} }

const mapStoreStateToComponentProps = (state) => {
    return({
        posts: state.posts
    })
}

export default connect(mapStoreStateToComponentProps)(ReducerHome)