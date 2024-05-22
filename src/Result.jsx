import React from 'react';
import tw from 'twin.macro';

const RES = tw.div` flex justify-evenly max-w-xl  items-baseline `;
const A = tw.a`ml-2 hover:bg-warmblue hover:text-almostblack`;

const data = [
  { command: 'about', description: 'brief summary', content: 'since you are checking this website out, I guess you probably know about me. If not, let me introduce myself. I am Tushar Pamnani, a sophomore at Shri Ramdeobaba College of Engineering and Management, Nagpur. I\'m a full stack web and blockchain developer with a pinch of love for Communities and hackathons.' },
  { command: 'funfact', description: 'fun fact about me', content: 'my screen time is more than som people\'s sleep time!' },
  { command: 'projects', description: "some projects i've posted", content: '' },
  { command: 'github', description: 'my github profile', content: 'https://github.com/tusharpamnani' },
  { command: 'linkedin', description: 'you can text me', content: 'https://www.linkedin.com/in/tushar-pamnani' },
  { command: 'email', description: 'you can email me', content: 'tusharpamnani55@gmail.com' },
  { command: 'music', description: 'a little energy break', content: 'https://www.youtube.com/watch?v=bpOSxM0rNPM' },
  {
    command: 'skills',
    description: "i'm good at some stuff",
    content: {
      frontEnd: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'ReactJS', 'NextJS'],
      backEnd: ['NodeJS', 'ExpressJs', 'C++', 'Python'],
      database: ['MySQL', 'Mongodb'],
      tools: ['VScode', 'Linux', 'Git', 'Github', 'Gitlab'],
    },
  },
  { command: 'repo', description: "check this project's repository", content: 'https://github.com/tusharpamnani/Terminal-Portfolio' },
  { command: 'clear', description: 'clear terminal', content: '' },
];

export default function Result({ commandInput }) {
  const res = commandInput === 'help' ? [...data] : [...data].filter((c) => c.command === commandInput);

  return (
    <div className="my-2 mr-2 text-coolgrey ">
      {res.length === 0 && <p>command not found</p>}

      {res.length === data.length &&
        res.map((cm, i) => (
          <RES key={i}>
            <p className="flex-1 -mr-16">{cm.command}</p>
            <p className="flex-1">{cm.description}</p>
          </RES>
        ))}

      {res.length < data.length &&
        res.map((cm, i) => {
          if (cm.command === 'skills') {
            return (
              <div key={i}>
                <p>
                  front end : {cm.content.frontEnd.map((element) => (
                    <span key={element}> {element} </span>
                  ))}
                </p>
                <p>
                  back end : {cm.content.backEnd.map((element) => (
                    <span key={element}> {element} </span>
                  ))}
                </p>
                <p>
                  database : {cm.content.database.map((element) => (
                    <span key={element}> {element} </span>
                  ))}
                </p>
                <p>
                  tools : {cm.content.tools.map((element) => (
                    <span key={element}> {element} </span>
                  ))}
                </p>
              </div>
            );
          } else {
            if (cm.command === 'projects') {
              return (
                <div key={i}>
                  <p>
                    weather app on terminal using rust: <A target="_blank" href="https://github.com/tusharpamnani/Weather-Forecast">Weather-Forecast</A>
                  </p>
                  <p>
                    the codebreakers club's website : <A target="_blank" href="https://thecodebreakers.netlify.app/">www.thecodebreakers.netlify.app</A>
                  </p>
                  <p>
                    smart contract for nft marketplace : <A target="_blank" href="https://github.com/tusharpamnani/NFT-MaretPlace-Contract/blob/main/contracts/NFTMarketplace.sol">NFTMarketplace.sol</A>
                  </p>
                </div>
              );
            } else {
              if (cm.command === 'linkedin' || cm.command === 'github') {
                return (
                  <p key={i}>
                    check out my {cm.command} profile : <A href={cm.content} target="_blank">{cm.content}</A>
                  </p>
                );
              } else {
                if (cm.command === 'music') {
                  return (
                    <div className="-ml-2" key={i}>
                      <A href={cm.content} target="_blank">{cm.content}</A>
                    </div>
                  );
                } else {
                  if (cm.command === 'repo') {
                    return (
                      <div key={i}>
                        <p>i built this website from scratch using React and JavaScript</p>
                        <p>
                          check out this project's repository : <A href={cm.content} target="_blank">{cm.content}</A>
                        </p>
                      </div>
                    );
                  } else {
                    return <p key={i}>{cm.content}</p>;
                  }
                }
              }
            }
          }
        })}
    </div>
  );
}
