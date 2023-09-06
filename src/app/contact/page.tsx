import React from "react";

const Contact = () => {
  return (
    <div className="lg:pl-96 sm:pl-0 ">
      <p>
        please email me @{" "}
        <a className="underline" href="">
          alxtkln@gmail.com,
        </a>
      </p>
      <p>
        follow me on{" "}
        <a
          className="underline"
          href="https://www.github.com/a-t-klein"
          target="_blank"
        >
          github,
        </a>
      </p>
      <p>
        or connect with me on{" "}
        <a
          className="underline"
          href="https://www.github.com/a-t-klein"
          target="_blank"
        >
          linkedin.
        </a>
      </p>
    </div>
  );
};

export default Contact;
