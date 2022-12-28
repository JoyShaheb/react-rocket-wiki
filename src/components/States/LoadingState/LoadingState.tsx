import { FC } from "react";
import LoaderComponent from "../../LoaderComponent/LoaderComponent";
import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";
import { SerializedError } from "@reduxjs/toolkit";

interface iLoadingState {
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
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
          .map((x, i) => (
            <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <LoaderComponent />
            </Grid>
          ))}
    </>
  );
};

export default LoadingState;
