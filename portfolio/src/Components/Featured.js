import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

export default function TabSelectorCareer() {
  //  const data = info;
  // console.log(info);

  //Gets a pre-configured url-builder from the sanity client.  Used to build image url's from sanity image data.
  const builder = imageUrlBuilder(sanityClient);

  const [projectData, setprojectData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  //Gives the builder an image and returns the builder to specify addition parameters.
  function urlFor(source) {
    return builder.image(source);
  }
  // console.log(data[0].position);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project" && featured]`)
      .then((data) => {
        setprojectData(data);
        console.log(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  //console.log(data);
  return (
    <>
      <h2 className="mb-10">Featured Projects</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <ul className="flex flex-col text-white gap-8">
            {projectData.map((project, index) => (
              <li key={index}>
                <div className="flex flex-row justify-center text-white">
                  <div className="w-1/4">
                    <img
                      className="w-full"
                      src={
                        project.image === undefined
                          ? 'https://via.placeholder.com/350x150'
                          : urlFor(project.image)
                      }
                      alt="Bobby"
                    />
                  </div>
                  <div className="text-white flex flex-col items-end">
                    <h2>{project.name}</h2>
                    <div className="text-secondaryc border border-solid bg-dark border-secondaryc max-w-md">
                      <p>{project.description}</p>
                    </div>
                    <ul className="flex flex-row gap-5 justify-end flex-wrap">
                      {project.frameworks.map((framework) => (
                        <li>{framework}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
