import React from "react";

import SkeletonCard from "./components/SkeletonCard";

type SkeletonContactsProps = {
  size?: number;
}

const SkeletonContacts: React.FC<SkeletonContactsProps> = React.memo(({ size = 10 }) => {
  return (
    <>
      {
        (Array.from({length: size})).map((_, index) => (
          <SkeletonCard key={index}/>
        ))
      }
    </>
  )
});

export default SkeletonContacts;