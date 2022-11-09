import React from "react";
import { FormattedMessage } from "react-intl";

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 capitalize">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            <FormattedMessage id="about.title" defaultMessage="about" />
          </p>
        </div>

        <p className="text-xl mt-20">
          <FormattedMessage
            id="about.first-description"
            defaultMessage="I am 22 years old, I am from Argentina - Neuquén. I am currently working on a group project, my goals are to acquire new experiences, add knowledge and be able to get my long-desired first job as a Developer."
          />
        </p>

        <p className="text-xl mt-5">
          <FormattedMessage
            id="about.last-description"
            defaultMessage="I consider myself a proactive person, with continuous learning, who loves teamwork. I have been passionate about technology and video games since I was a child, in my free time I read books, play sports and enjoy my family."
          />
        </p>
      </div>
    </div>
  );
}

export default About;
