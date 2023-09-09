import React from "react";
import Image from "next/image";
import { BlogPostProps } from "../Interfaces";

const BlogPreview: React.FC<BlogPostProps> = ({
  id,
  img,
  altTxt,
  title,
  description,
  tags,
}) => {
  return (
    <div key={id} className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
      <div className="w-full h-80 relative">
        <Image src={img} alt={altTxt} fill={true} />
      </div>
      <div>
        <h1 className="">{title}</h1>
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
