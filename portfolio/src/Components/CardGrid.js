import React from 'react';
import Card from './Card';

export default function CardGrid() {
  const cardData = {
    title: 'Test Title',
    description:
      'Test Description building a custom multisite. Testing my card descriptions.  A new paragraph for my card descriptions. One more sentence for my card descriptions.',
  };
  return (
    <>
      <div className="grid grid-cols-3 grid-rows-2 gap-5">
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
        <Card data={cardData} />
      </div>
      <div className="flex flex-row justify-center">
        <button className="text-center mt-8">Show More</button>
      </div>
    </>
  );
}
