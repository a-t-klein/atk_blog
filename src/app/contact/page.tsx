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
    label: "github",
  },
  {
    text: "connect with me on",
    link: "https://www.linkedin.com/in/a-t-klein",
    label: "linkedin",
  },
  {
    text: "or download my",
    link: "/atk_resume.pdf",
    label: "resume",
  },
];

const Contact = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
      <p className="sm:mb-6 md:mb-0">it would be great to hear from you! </p>
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
    </div>
  );
};

export default Contact;
