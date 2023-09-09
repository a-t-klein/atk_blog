import React from "react";
import BlogPreview from "../Components/BlogPreview";
import { BlogPostProps } from "../Interfaces";

const BlogContainer = () => {
  return (
    <div>
      <BlogPreview
        id="3asdf"
        img="https://picsum.photos/200/300?grayscale"
        altTxt="img"
        title="new blog!"
        text=""
        description="perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni..."
        tags={["cool", "first"]}
      />
      <BlogPreview
        id="xx"
        img="https://picsum.photos/200/300?grayscale"
        altTxt="img"
        title="Another Blog!"
        text=""
        description="perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni..."
        tags={["cool", "first"]}
      />
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
