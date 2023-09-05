import React from "react";
import Image from "next/image";
import { BlogPostProps } from "../Interfaces";

const BlogPreview: React.FC<BlogPostProps> = ({
  key,
  img,
  altTxt,
  title,
  description,
  tags,
}) => {
  return (
    <div key = {key}>
      <Image src={img} alt={altTxt} />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>
          {tags.map((tag) => (
            <>tag</>
          ))}
        </span>
      </div>
    </div>
  );
};

export default BlogPreview;
