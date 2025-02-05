import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      <Card
        title="Completed Challenges"
        number={5}
      />
      <Card
        title="Open Challenges"
        number={200}
      />
      <Card
        title="Ongoing Challenges"
        number={200}
      />
    </div>
  );
};

export default Cards;
