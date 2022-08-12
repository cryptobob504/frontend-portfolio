import React from 'react';
import { FaFolder } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

export default function Card({ data }) {
  return (
    <div className="flex flex-col justify-center rounded bg-dark text-white p-8">
      <div className="flex flex-row justify-between">
        <FaFolder size="1.5em" />
        <div className="flex flex-row">
          <AiFillGithub size="1.5em" />
          <BiLinkExternal size="1.5em" />
        </div>
      </div>
      <h2 id="title" className="text-center">
        {data.title}
      </h2>
      <p id="desc" className="text-center">
        {data.description}
      </p>
      <ul className="flex flex-row gap-5 justify-center mt-5 text-secondaryc">
        <li>React</li>
        <li>Frontend</li>
        <li>Node.js</li>
        <li>Full Stack</li>
      </ul>
    </div>
  );
}
