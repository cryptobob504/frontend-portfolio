import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

export default function TabSelectorEducation() {
  //const data = info;
  const [selected, setSelected] = useState(0);
  const [schoolData, setschoolData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const handleSelect = (index) => {
    setSelected(parseInt(index));
  };

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "school"]`)
      .then((data) => {
        setschoolData(data);
        console.log(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  //console.log(data);
  return (
    <>
      <h2>My Education</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row gap-20">
          <ul className="flex flex-col text-white gap-5">
            {schoolData.map((school, index) => (
              <li
                className={
                  selected === index
                    ? 'bg-secondaryc text-bgcolor font-bold'
                    : 'hover:bg-secondaryc'
                }
                onClick={() => handleSelect(index)}
                key={index}
              >
                {school.abbreviation === undefined
                  ? school.name
                  : school.abbreviation}
              </li>
            ))}
          </ul>
          <div className="text-white">
            <h2>{schoolData[selected].name}</h2>
            <h3 className="text-secondaryc">{schoolData[selected].degree}</h3>
            <p>{schoolData[selected].year}</p>
            &nbsp;
            <ul className="gap-10">
              <li>{schoolData[selected].description}</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
