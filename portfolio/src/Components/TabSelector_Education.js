import React, { useEffect, useState } from 'react';

export default function TabSelectorEducation({ info }) {
  const data = info;
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
      <h2>My Education</h2>
      <div className="flex flex-row gap-20">
        <ul className="flex flex-col text-white gap-5">
          {data.map((school, index) => (
            <li
              className={
                selected === index
                  ? 'bg-secondaryc text-bgcolor font-bold'
                  : 'hover:bg-secondaryc'
              }
              onClick={() => handleSelect(index)}
              key={index}
            >
              {school.name}
            </li>
          ))}
        </ul>
        <div className="text-white">
          <h2>{data[selected].name}</h2>
          <p>{data[selected].date}</p>
          &nbsp;
          <ul className="gap-10">
            <li>{data[selected].description}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
