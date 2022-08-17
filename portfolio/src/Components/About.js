import React from 'react';
import pfp from '../bob.jpg';

export default function About() {
  return (
    <div className="flex flex-row justify-around sm:flex-col-reverse">
      <div className="flex flex-col gap-5">
        <h2>About Me</h2>
        <div className="max-w-2xl">
          <p className="text-white">
            Versatile business leader bringing 7 years of experience as an
            accomplished CEO and 20+ years of experience working in the credit
            union industry. Strategic Problem Solver, Lifetime Learner, Change
            Manager and Visionary Executive with success implementing plans to
            meet current and future needs. Diverse expertise and skillset in
            Consumer Banking, Innovation, Technology, Software Development, and
            Entrepreneurship.
          </p>
          <p className="text-white">
            I have a passion for blockchain, cryptocurrency, NFT, DAO's, and
            decentralized technologies. I am currently seeking to utilize my
            unique mix of experience in technology, business, and cooperative
            organizations to find my next challenge and exploring opportunities
            in the web3 and blockchain space.
          </p>
          <p className="text-white">
            Listed below are some of the business and technology skills that I
            have acquired throughout my career:
          </p>
        </div>
        <div className="flex flex-col gap-20">
          <div className="flex flex-row gap-20">
            <ul className="list-disc marker:text-secondaryc text-white">
              <li>Javascript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <ul className="list-disc marker:text-secondaryc text-white">
              <li>Express.js</li>
              <li>Solidity</li>
              <li>MongoDB</li>
            </ul>
            <ul className="list-disc marker:text-secondaryc text-white">
              <li>Leadership</li>
              <li>Strategic Planning</li>
              <li>Communication</li>
            </ul>
            <ul className="list-disc marker:text-secondaryc text-white">
              <li>Budgeting</li>
              <li>Entrepreneurship</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="self-center p-1 border bg-bgcolor border-secondaryc rounded max-w-full"
        width="300"
        height="200"
        src={pfp}
        alt="robert"
      />
    </div>
  );
}
