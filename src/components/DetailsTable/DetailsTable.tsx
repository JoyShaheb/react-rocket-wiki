import React from "react";
import { useParams } from "react-router-dom";

const DetailsTable = ({}) => {
  const params = useParams();
  const id = params?.id;
  return <div>DetailsTable of : {id}</div>;
};

export default DetailsTable;
