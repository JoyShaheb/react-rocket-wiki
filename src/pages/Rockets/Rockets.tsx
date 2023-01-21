import MuiCard from "../../components/MuiCard/MuiCard";
import Title from "../../components/Title/Title";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useGetAllRocketsQuery } from "../../store";
import { Grid } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import LoadingState from "../../components/States/LoadingState/LoadingState";
import ErrorState from "../../components/States/ErrorState/ErrorState";
import NoDataState from "../../components/States/NoDataState/NoDataState";
import { Progress } from "../../components/NProgress/ProgressBar";

const Rockets = () => {
  // @ts-ignore
  const { data, isLoading, error, isFetching } = useGetAllRocketsQuery();
  Progress(isFetching);

  return (
    <div className="">
      <Title label="Rockets" icon={<RocketLaunchIcon fontSize="large" />} />
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
