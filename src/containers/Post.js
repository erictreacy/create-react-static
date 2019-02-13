import React from 'react'
import { RouteData, Link } from 'react-static'
//

export default () => (
  <RouteData
    render={({ post }) => (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )}
  />
)
