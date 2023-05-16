import { ProgressBar } from "../components/NProgress/ProgressBar";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useGetAllDragonsQuery } from "../store";
import { States } from "../components/States";
import Title from "../components/Title/Title";
import { Grid } from "@mui/material";
import { IDragon } from "../types/dragon.interface";
import { nanoid } from "nanoid";

const Dragons = () => {
  const { data, isLoading, isFetching, isError, error } =
    useGetAllDragonsQuery(undefined);
  ProgressBar(isFetching || isLoading);

  console.log(data);
  return (
    <div>
      <Title label="Dragons" icon={<DiamondIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        <States
          dataLength={data?.length as number}
          error={error}
          isLoading={isLoading}
          skeletonCount={12}
          isFetching={isFetching}
        />

        {/* 
        {!isLoading &&
          !error &&
          (data?.length as number) > 0 &&
          data?.map((item: IDragon) => {
            const { name, id, flickr_images, description, type } = item || [];
            return (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <MuiCard
                  key={id}
                  description={description}
                  name={name}
                  image={flickr_images[0]}
                  label={type}
                />
              </Grid>
            );
          })} */}
      </Grid>
    </div>
  );
};

export default Dragons;
