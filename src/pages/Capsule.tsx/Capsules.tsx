import DataCard from "../../components/DataCard/DataCard";
import Title from "../../components/Title/Title";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useGetAllCapsulesQuery } from "../../store";
import LoadingState from "../../components/States/LoadingState/LoadingState";
import ErrorState from "../../components/States/ErrorState/ErrorState";
import NoDataState from "../../components/States/NoDataState/NoDataState";
import { Progress } from "../../components/NProgress/ProgressBar";

const Capsules = () => {
  // @ts-ignore
  const { data, isLoading, error, isFetching } = useGetAllCapsulesQuery();
  Progress(isFetching);

  return (
    <div>
      <Title label="Capsules" icon={<CatchingPokemonIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        <LoadingState isLoading={isLoading} error={error} skeletonCount={8} />
        <ErrorState isLoading={isLoading} error={error} />
        <NoDataState
          isLoading={isLoading}
          error={error}
          dataLength={data?.length}
        />

        {!isLoading &&
          !error &&
          data?.length > 0 &&
          data?.map((x: any) => {
            const { type, id, last_update, serial } = x || [];
            return (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <DataCard
                  text={last_update}
                  key={id}
                  label={type}
                  name={serial}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Capsules;
