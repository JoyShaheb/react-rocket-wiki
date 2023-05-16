import { FC } from "react";
import { ErrorState, LoadingState, NoDataState } from ".";
import { iErrorState } from "../../types/types";

interface IStatesProps extends iErrorState {
  dataLength: number;
  skeletonCount: number;
}

const States: FC<IStatesProps> = ({
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

export default States;
