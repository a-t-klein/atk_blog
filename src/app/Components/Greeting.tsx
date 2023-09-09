const Greeting = () => {
  const aboutMeText =
    "Hi, I'm my name is Alex T. Klein, welcome to my personal website and blog. I'm a developer currently based in Los Angeles, CA. Below you can see some of my recent blog posts and projects. Take a look around and let me know what you think. Thanks so much for taking the time, i'd love to hear from you sometime soon. :)";

  return (
    <div className="mb-6 pb-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-custom gap-6">
      <div className="col-span-3 sm:columns-1 md:columns-2 lg:columns-3 md:col-start-1 lg:col-start-2">
        <p className="">{aboutMeText}</p>
      </div>
    </div>
  );
};

export default Greeting;
