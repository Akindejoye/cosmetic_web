import React from 'react'
import BlogCard from './BlogCard';

const data = [
  {
    img: "/images/post__1.avif",
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 09, 2024",
    comment: 8,
  },
  {
    img: "/images/post__2.avif",
    title: "Lorem ipsum dolor sit amet",
    date: "Aug 27, 2024",
    comment: 27,
  },
  {
    img: "/images/post__3.avif",
    title: "Lorem ipsum dolor sit amet",
    date: "Sep 10, 2024",
    comment: 3,
  }
]

const BlogSection = () => {
  return (
    <div className='container pt-32'>
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present post in a best way to highlight interesting
        moments of your blog.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <BlogCard
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
         />
        ))}
      </div>
    </div>
  );
}

export default BlogSection