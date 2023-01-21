import React from "react";
import DataCard from "../../components/DataCard/DataCard";
import HubIcon from "@mui/icons-material/Hub";
import Title from "../../components/Title/Title";
import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import LoadingState from "../../components/States/LoadingState/LoadingState";
import ErrorState from "../../components/States/ErrorState/ErrorState";
import NoDataState from "../../components/States/NoDataState/NoDataState";
import { useGetAllCapsulesQuery } from "../../store";
import { Progress } from "../../components/NProgress/ProgressBar";

const Cores = () => {
  // @ts-ignore
  const { data, isLoading, error, isFetching } = useGetAllCapsulesQuery();
  Progress(isFetching);

  return (
    <div>
      <Title label="Cores" icon={<HubIcon fontSize="large" />} />
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
            const { id, last_update, serial, status } = x || [];
            return (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <DataCard
                  key={id}
                  label={status}
                  text={last_update}
                  name={serial}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Cores;
