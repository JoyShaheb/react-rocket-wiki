import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import MuiCard from "../components/MuiCard/MuiCard";
import Title from "../components/Title/Title";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useGetAllRocketsQuery } from "../store";
import { Grid, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";

const Rockets = () => {
  // @ts-ignore
  const { data, isLoading, error } = useGetAllRocketsQuery();

  return (
    <div className="">
      <Title label="Rockets" icon={<RocketLaunchIcon fontSize="large" />} />
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
            const { name, id, flickr_images, description, type } = x || [];
            return (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <MuiCard
                  linkTo={`rockets/${id}`}
                  description={description}
                  name={name}
                  image={flickr_images[0]}
                  label={type}
                  pointer
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Rockets;
