import React from "react";

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React App To Search GitHub Profiles And See Profile Details.
      </p>
      <p className="text-lg text-gray-400">
        Version : <span> 1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By :
        <a href="https://github.com/CodingWithEnjoy"> Coding With Enjoy</a>
      </p>
    </>
  );
}

export default About;
