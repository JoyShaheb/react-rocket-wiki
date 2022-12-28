import React from "react";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import DataCard from "../components/DataCard/DataCard";
import Title from "../components/Title/Title";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Grid, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useGetAllCapsulesQuery } from "../store";

const Capsules = () => {
  // @ts-ignore
  const { data, isLoading, error } = useGetAllCapsulesQuery();
  return (
    <div>
      <Title label="Capsules" icon={<CatchingPokemonIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        {isLoading &&
          !error &&
          Array(8)
            .fill(0)
            .map((x, i) => (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <LoaderComponent />
              </Grid>
            ))}
        {!isLoading && error && (
          <Grid key={nanoid()} item xs={12}>
            <Typography variant="h5" textAlign="center">
              Something went wrong
            </Typography>
          </Grid>
        )}
        {!isLoading && !error && data?.length === 0 && (
          <Grid key={nanoid()} item xs={12}>
            <Typography variant="h5" textAlign="center">
              No Data found
            </Typography>
          </Grid>
        )}

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
