import React, { useState, useRef } from 'react';
import tw from 'twin.macro';
import ResCmd from './ResCmd';
import { cloneElement } from 'react';

const PATH = tw.span`text-warmpurple text-lg`;
const INPUT = tw.input`ml-5 focus:outline-0 border-transparent focus:border-transparent focus:ring-0 focus:outline-none border-none text-warmgrey bg-almostblack caret-black w-1`;

const Command = ({ showres, showcmd, cmd }) => {
  const [commandInput, setCommandInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [animation, setAnimation] = useState('blinkAnimation');
  const [resCmd, showResCmd] = useState(false);
  const ref = useRef(null);

  const handleChangeAndSize = (ev) => {
    const target = ev.target;
    target.style.width = '5px';
    target.style.width = `${target.scrollWidth}px`;
    setCommandInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commandInput === 'clear') {
      window.location.reload();
    } else {
      setIsDisabled(true);
      setAnimation('');
      showResCmd(true);
    }
  };

  const clonedElement = cloneElement(<ResCmd showres={showres} showcmd={showcmd} cmd={cmd} commandInput={commandInput} />);

  return (
    <div onClick={() => ref.current?.focus()}>
      <form className="flex" onSubmit={handleSubmit}>
        <PATH> guest@myPortfolio:~$ </PATH>
        <div className="cursor">
          <INPUT
            type="text"
            name="commandInput"
            value={commandInput}
            onChange={handleChangeAndSize}
            autoFocus
            ref={ref}
            disabled={isDisabled}
            autoComplete="off"
          />
          <i className={animation}></i>
          <button type="submit"></button>
        </div>
      </form>
      {resCmd && clonedElement}
    </div>
  );
};

export default Command;
