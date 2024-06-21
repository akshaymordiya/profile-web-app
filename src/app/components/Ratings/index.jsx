import React from 'react'

import "./index.scss"

const BASE_CLASSNAME = "ratings_container"

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Ratings = ({
  ratings,
  children
}) => {

  const fullStars = Math.floor(ratings);
  const halfStar = ratings % 1 !== 0;

  return (
    <div className={BASE_CLASSNAME}>
       {Array.from({ length: fullStars }).map((_, index) => (
          <StarIcon key={index + 1} className={`${BASE_CLASSNAME}_star`} />
        ))}
      {halfStar && <StarHalfIcon className={`${BASE_CLASSNAME}_star`} />}
      {children}
    </div>
  )
}

export default Ratings