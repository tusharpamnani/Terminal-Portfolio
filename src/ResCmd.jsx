import React from 'react';
import Result from './Result';
import Command from './Command';

const ResCmd = ({ showres, showcmd, cmd, commandInput }) => {
  return (
    <div>
      <div>
        <Result commandInput={commandInput} />
        <Command showres={showres} showcmd={showcmd} cmd={cmd} />
      </div>
    </div>
  );
};

export default ResCmd;
