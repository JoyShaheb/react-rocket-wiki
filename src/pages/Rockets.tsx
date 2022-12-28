import { useEffect, useState } from "react";
import { fetchData } from "../axios/axiosHttps";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import MuiCard from "../components/MuiCard/MuiCard";
import Title from "../components/Title/Title";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { useGetAllRocketsQuery } from "../store";
import { Grid } from "@mui/material";

const Rockets = () => {
  // @ts-ignore
  const { data: DATA, isLoading, error } = useGetAllRocketsQuery();
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const fetch: any = await fetchData(`/rockets`);
      setData(fetch?.data);
      console.log(fetch?.data);
    })();
  }, []);
  return (
    <div className="">
      <Title label="Rockets" icon={<RocketLaunchIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { name, id, flickr_images, description, type } = x || [];
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <MuiCard
                  key={id}
                  linkTo={`rockets/${id}`}
                  description={description}
                  name={name}
                  image={flickr_images?.pop()}
                  label={type}
                  pointer
                />
              </Grid>
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default Rockets;
