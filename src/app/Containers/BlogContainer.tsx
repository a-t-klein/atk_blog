import React from "react";
import BlogPreview from "../Components/BlogPreview";
import { BlogPostProps } from "../Interfaces";

const BlogContainer = () => {
  return (
    <div>
      <BlogPreview
        id="3asdf"
        img="https://picsum.photos/id/870/200/300?grayscale&blur=2"
        altTxt="img"
        title="new blog!"
        text=""
        description="blog post"
        tags={["cool", "first"]}
      />
      <div>loading :)</div>
      <div>loading :)</div>
      <div>loading :)</div>
      <div>loading :)</div>
      <div>loading :)</div>
      <div>loading :)</div>
    </div>

    // <div>
    //   {posts.map((post, i) => (
    //     <BlogPreview
    //       key={`${i}`}
    //       img={""} // Adjust these props according to your actual data structure
    //       altTxt={post.title}
    //       title={post.title}
    //       description={post.description}
    //       text={post.body}
    //       tags={["tag1", "tag2"]}
    //     />
    //   ))}
    // </div>
  );
};

export default BlogContainer;
