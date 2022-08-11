import React, { useEffect, useState } from 'react';

export default function TabSelector() {
  const data = [
    {
      position: 'President/CEO',
      date: 'May 2016 - Present',
      accomplishments: [
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
    {
      position: 'Owner/Operator',
      date: 'December 2020 - March 2021',
      accomplishments: [
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
    {
      position: "Operation's Manager",
      date: 'May 2016 - Present',
      accomplishments: [
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
    {
      position: 'IT Manager',
      date: 'May 2016 - Present',
      accomplishments: [
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
    {
      position: 'Member Service Rep',
      date: 'May 2016 - Present',
      accomplishments: [
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
    {
      position: 'Temp Office Assistant',
      date: 'May 2016 - Present',
      accomplishments: [
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          message:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
      ],
    },
  ];
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
      <h2>My Career</h2>
      <div className="flex flex-row gap-20">
        <ul className="flex flex-col text-white gap-8">
          {data.map((job, index) => (
            <li
              className={
                selected === index
                  ? 'bg-secondaryc text-bgcolor font-bold'
                  : 'hover:bg-secondaryc'
              }
              onClick={() => handleSelect(index)}
              key={index}
            >
              {job.position}
            </li>
          ))}
        </ul>
        <div className="text-white">
          <h2>{data[selected].position}</h2>
          <p>{data[selected].date}</p>
          &nbsp;
          <ul className="gap-10">
            {data[selected].accomplishments.map((accomplishments) => (
              <li>{accomplishments.message}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
