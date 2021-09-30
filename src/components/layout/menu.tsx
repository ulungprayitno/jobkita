import { Button } from 'antd';
import React from 'react';

const Menu = () => {
  const MENUS = [
    { key: 'home', label: 'Home' },
    { key: 'job', label: 'Job List' },
    { key: 'postJob', label: 'Post Your Job' },
  ];

  return (
    <>
      {MENUS.map((m) => (
        <Button key={m.key} type="link" href={m.key === 'postJob' ? `/${m.key}` :`/#${m.key}`} className="text-weight-medium">
          {m.label}
        </Button>
      ))}
    </>
  );
};

export default Menu;
