import React from "react";

const Greeting = () => {
  const aboutMeText =
    "Hi, I'm my name is Alex T. Klein, welcome to my personal website. I'm a full stack developer and artist currently based in Los Angeles, CA. Below you can see some of my recent blog posts and projects. Take a look around and let me know what you think. Thanks so much for taking the time, i'd love to hear from you sometime soon. :)";

  return (
    <div className="md:columns-2xs pb-6 mb-6 lg:pl-96 sm:pl-0 border-b-custom leading-6">
      {aboutMeText}
    </div>
  );
};

export default Greeting;
