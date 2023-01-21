import MuiCard from "../../components/MuiCard/MuiCard";
import Title from "../../components/Title/Title";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import { Grid } from "@mui/material";
import { useGetAllShipsQuery } from "../../store";
import { nanoid } from "@reduxjs/toolkit";
import LoadingState from "../../components/States/LoadingState/LoadingState";
import ErrorState from "../../components/States/ErrorState/ErrorState";
import NoDataState from "../../components/States/NoDataState/NoDataState";
import { Progress } from "../../components/NProgress/ProgressBar";

const Ships = () => {
  // @ts-ignore
  const { data, isLoading, error, isFetching } = useGetAllShipsQuery();
  Progress(isFetching);

  return (
    <div>
      <Title label="Ships" icon={<DirectionsBoatIcon fontSize="large" />} />
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
