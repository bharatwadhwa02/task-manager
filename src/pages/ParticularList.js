import React from "react";
import { useParams } from "react-router-dom";

const ParticularList = () => {
  const { listId } = useParams();
  console.log(listId);
  return <div>particularList</div>;
};

export default ParticularList;
