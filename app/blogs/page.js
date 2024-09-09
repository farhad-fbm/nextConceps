import Link from 'next/link'
import React from 'react'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Blog-1',
      des: 'Blog-1 Description'
    },
    {
      id: 2,
      title: 'Blog-2',
      des: 'Blog-2 Description'
    }
  ]
  return (
    <div>
      {blogs.map(blog => <li key={blog.id}>
        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
      </li>)}
    </div>
  )
}
