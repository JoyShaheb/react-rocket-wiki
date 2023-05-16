import { FC } from "react";
import { ErrorState, LoadingState, NoDataState } from ".";
import { iErrorState } from "../../types/types";

interface IStateProps extends iErrorState {
  dataLength: number;
  skeletonCount: number;
}

const State: FC<IStateProps> = ({
  error,
  isLoading,
  dataLength,
  skeletonCount,
}) => {
  return (
    <>
      <LoadingState
        isLoading={isLoading}
        error={error}
        skeletonCount={skeletonCount}
      />
      <ErrorState isLoading={isLoading} error={error} />
      <NoDataState
        error={error}
        isLoading={isLoading}
        dataLength={dataLength}
      />
    </>
  );
};

export default State;
