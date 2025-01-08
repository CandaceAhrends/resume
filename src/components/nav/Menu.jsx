import React, { useState } from 'react';
import Items from './Items';
import Ham from '/ham.svg';
import Exit from '/exit.svg';
import classNames from 'classnames';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const navClass = classNames({
    'ham-menu': true,
    clickable: true,
    closed: !open,
  });

  return (
    <nav>
      <span onClick={() => setOpen(!open)} className={navClass}>
        <img src={open ? Exit : Ham} alt="menu dropdown" />
      </span>
      <Items open={open}></Items>
    </nav>
  );
};

export default Menu;
