import { useEffect, useState } from "react";
import { fetchData } from "../axios/axiosHttps";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import MuiCard from "../components/MuiCard/MuiCard";
import Title from "../components/Title/Title";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import { Grid } from "@mui/material";

const Ships = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const fetch: any = await fetchData(`/ships`);
      setData(fetch?.data);
      console.log(fetch?.data);
    })();
  }, []);
  return (
    <div>
      <Title label="Ships" icon={<DirectionsBoatIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { id, image, name, type, roles } = x || [];
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <MuiCard
                  key={id}
                  description={roles.join(", ")}
                  name={name}
                  label={type}
                  image={image}
                />
              </Grid>
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default Ships;
