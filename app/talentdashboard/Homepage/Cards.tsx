import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className="mx-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      <div className="flex-1">
        <Card
          title="Completed Challenges"
          number={5}
        />
      </div>
      <div className="flex-1">
        <Card
          title="Open Challenges"
          number={200}
        />
      </div>
      <div className="flex-1">
        <Card
          title="Ongoing Challenges"
          number={200}
        />
      </div>
    </div>
  );
};

export default Cards;
