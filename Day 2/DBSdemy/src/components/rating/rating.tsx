import React from "react";

type RatingsProps = {
  noofstars: number;
};

const Rating: React.FC<RatingsProps> = (props: RatingsProps) => {
  let ratings = [];
  for (let index = 0; index < props.noofstars; index++) {
    ratings.push(
      <span style={{ color: "orange" }}>
        <i className="fa-solid fa-star"></i>
      </span>,
    );
  }
  return <>{ratings}</>;
};

export default Rating;
