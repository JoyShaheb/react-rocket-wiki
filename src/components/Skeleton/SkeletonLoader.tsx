import { Skeleton } from "@mui/material";

const SkeletonLoader = () => {
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

export default SkeletonLoader;
