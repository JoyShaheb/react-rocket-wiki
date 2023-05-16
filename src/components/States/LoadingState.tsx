import { FC } from "react";
import SkeletonLoader from "../Skeleton/SkeletonLoader";
import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { iErrorState } from "../../types/types";

interface iLoadingState extends iErrorState {
  skeletonCount?: number;
}

const LoadingState: FC<iLoadingState> = ({
  error,
  isLoading,
  skeletonCount,
}) => {
  return (
    <>
      {isLoading &&
        !error &&
        Array(skeletonCount)
          .fill(0)
          .map(() => (
            <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <SkeletonLoader />
            </Grid>
          ))}
    </>
  );
};

export default LoadingState;
