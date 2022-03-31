import React from 'react';

function Card({ data }) {
  console.log();
  return (
    <div className="card">
      <div>
        <img src={data.thumbnail.path + '.' + data.thumbnail.extension} alt={data.name} />
      </div>
      <p>{data.name}</p>
    </div>
  );
}

export default Card;