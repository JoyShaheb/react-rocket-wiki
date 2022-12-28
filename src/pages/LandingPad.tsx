import React from 'react'
import { useGetAllLandPadsQuery } from '../store'
import Title from "../components/Title/Title";
import GamesIcon from "@mui/icons-material/Games";
import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import MuiCard from "../components/MuiCard/MuiCard";
import LoadingState from "../components/States/LoadingState/LoadingState";
import ErrorState from "../components/States/ErrorState/ErrorState";
import NoDataState from "../components/States/NoDataState/NoDataState";

const LandingPad = () => {
  // @ts-ignore
  const { data, error, isLoading } = useGetAllLandPadsQuery()
  console.log(data)

  return (
    <div className="">
      <Title label="Landing Pads" icon={<GamesIcon fontSize="large" />} />
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
            const { name, id, details, images, status } = x || [];
            return (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <MuiCard
                  linkTo={`rockets/${id}`}
                  description={details}
                  name={name}
                  image={images?.large[0]}
                  label={status}
                  pointer
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  )
}

export default LandingPad