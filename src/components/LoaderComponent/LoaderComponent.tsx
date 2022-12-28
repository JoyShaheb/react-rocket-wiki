import React from "react";
import { Skeleton } from "@mui/material";

const LoaderComponent = () => {
  const cardHeight = 200;
  const animationType = "wave";
  return (
    <Skeleton
      animation={animationType}
      variant="rectangular"
      height={cardHeight}
      sx={{
        borderRadius: 1,
      }}
    />
  );
};

export default LoaderComponent;
