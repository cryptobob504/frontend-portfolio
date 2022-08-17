import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

export default function TabSelectorCareer() {
  //  const data = info;
  // console.log(info);

  const [selected, setSelected] = useState(0);
  const [jobData, setjobData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const handleSelect = (index) => {
    setSelected(parseInt(index));
  };

  // console.log(data[0].position);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "job"] `)
      .then((data) => {
        setjobData(data);
        console.log(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  //console.log(data);
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row gap-20">
          <ul className="flex flex-col text-white gap-8">
            {jobData.map((job, index) => (
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
            <h2>{jobData[selected].position}</h2>
            <h3>{jobData[selected].company}</h3>
            <p>{jobData[selected].month_year}</p>
            &nbsp;
            <ul className="gap-10">
              {jobData[selected].accomplishments.map((accomplishment) => (
                <li>{accomplishment}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
