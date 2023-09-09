import React from "react";

const contactInfo = [
  {
    text: "please email me",
    link: "mailto:alxtkln@gmail.com",
    label: "alxtkln@gmail.com",
  },
  {
    text: "follow me on",
    link: "https://www.github.com/a-t-klein",
    label: "gitHub",
  },
  {
    text: "connect with me on",
    link: "https://www.linkedin.com/in/a-t-klein",
    label: "linkedIn",
  },
];

const Contact = () => {
  return (
    <div>
      {contactInfo.map((info, index) => (
        <p key={index}>
          {`${info.text} `}
          <a
            className="underline"
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {info.label}
          </a>
        </p>
      ))}
    </div>
  );
};

export default Contact;
