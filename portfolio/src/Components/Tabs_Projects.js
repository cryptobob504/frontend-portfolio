import React, { useEffect, useState } from 'react';
import { FaStackExchange } from 'react-icons/fa';
import CardGrid from './CardGrid';

export default function TabsProjects() {
  // const data = info;

  const categories = ['Frontend', 'Backend', 'Full Stack', 'Web3'];

  const [selected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(parseInt(index));
  };

  // console.log(data[0].position);
  useEffect(() => {
    //setSelected(parseInt(selected));
  }, []);

  //console.log(data);
  return (
    <>
      <ul className="flex flex-row text-white gap-8 justify-around">
        {categories.map((category, index) => (
          <li
            className={
              selected === index
                ? 'bg-secondaryc text-bgcolor font-bold'
                : 'hover:bg-secondaryc'
            }
            onClick={() => handleSelect(index)}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
      <CardGrid />
    </>
  );
}
