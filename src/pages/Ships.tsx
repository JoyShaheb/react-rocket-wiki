import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import MuiCard from "../components/MuiCard/MuiCard";
import Title from "../components/Title/Title";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import { Grid, Typography } from "@mui/material";
import { useGetAllShipsQuery } from "../store";
import { nanoid } from "@reduxjs/toolkit";

const Ships = () => {
  // @ts-ignore
  const { data, isLoading, error } = useGetAllShipsQuery();

  return (
    <div>
      <Title label="Ships" icon={<DirectionsBoatIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        {isLoading &&
          !error &&
          Array(10)
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
            const { id, image, name, type, roles } = x || [];
            return (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <MuiCard
                  key={id}
                  description={roles.join(", ")}
                  name={name}
                  label={type}
                  image={image}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Ships;
