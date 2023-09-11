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
    <div
      key={id}
      className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-6"
    >
      <div className="w-full h-80 relative filter flex justify-center items-center sm:col-span-1 md:col-span-2">
        {/* <Image src={img} alt={altTxt} fill={true} objectFit="cover" /> */}
        <div className="absolute inset-0 bg-red-500 opacity-50"></div>
      </div>
      <div className="sm:col-span-1 md:col-span-2">
        <h1 className="mb-3  underline">{title}</h1>
        <p className="mb-3">{description}</p>
        <span>
          {tags.map((tag, index) => (
            <>{index > 0 && ", "}tag</>
          ))}
        </span>
      </div>
    </div>
  );
};

export default BlogPreview;
