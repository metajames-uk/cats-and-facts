import React from "react";

export const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        This is a react app using the{" "}
        <a
          href='https://apilist.fun/api/cat-facts'
          target='_blank'
          rel='noopener noreferrer'
        >
          Cat Facts API
        </a>
      </p>
      <p>
        See the project on{" "}
        <a
          href='https://github.com/metajames-uk/cats-and-facts'
          target='_blank'
        >
          Github
        </a>
      </p>
    </div>
  );
};
