import React from 'react'
import { RouteData, Link } from 'react-static'
//

export default () => (
  <RouteData
    render={({ posts }) => (
      <div>
        <h1>Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)
