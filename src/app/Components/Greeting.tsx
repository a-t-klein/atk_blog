const Greeting = () => {
  const aboutMeText =
    "Hi, I'm my name is Alex T. Klein, welcome to my personal website and blog. I'm a developer currently based in Los Angeles, CA. Below you can see some of my recent blog posts and projects. Take a look around and let me know what you think. Thanks so much for taking the time, i'd love to hear from you sometime soon. :)";

  return (
    <div className="sm:columns-1 md:columns-2 lg:columns-4 border-b-custom mb-6 pb-6">
      <p> {aboutMeText}</p>
    </div>
  );
};

export default Greeting;
