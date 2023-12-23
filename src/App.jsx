import React, { useState } from 'react';
import tw from 'twin.macro';
import Command from './Command';

const CONTAINER = tw.div` py-5 px-2 `;
const BANNER = tw.div`flex ml-2 md:ml-0`;
const PRE = tw.div`text-coolgrey font-mono  mt-8 ml-4 `;
const SPAN = tw.span`text-warmblue font-mono  `;
const APP = tw.div`font-mono  mt-8 ml-4 `;

function App() {
  const [res, showres] = useState(false);
  const [cmd, showcmd] = useState(false);

  return (
    <CONTAINER>
      <BANNER>
        <img src="/name-PhotoRoom.png-PhotoRoom.png" alt="" className="md:w-2/3 md:max-w-6xl" />
{/*         <span className="text-blue-500 text-lg self-end opacity-80">v1.3.0</span> */}
      </BANNER>
      <PRE>
        <p>welcome to my interactive web terminal.</p>
        <p>
          type <SPAN>'help'</SPAN> for a list of available commands.
        </p>
      </PRE>
      <APP>
        <Command showres={showres} showcmd={showcmd} cmd={cmd} />
      </APP>
    </CONTAINER>
  );
}

export default App;
