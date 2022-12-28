import React, { useState, useEffect } from "react";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { fetchData } from "../axios/axiosHttps";
import DataCard from "../components/DataCard/DataCard";
import Title from "../components/Title/Title";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { Grid } from "@mui/material";

const Capsules = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const fetch: any = await fetchData(`/capsules`);
      setData(fetch?.data);
      console.log(fetch?.data);
    })();
  }, []);
  return (
    <div>
      <Title label="Capsules" icon={<CatchingPokemonIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { type, id, last_update, serial } = x || [];
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <DataCard
                  text={last_update}
                  key={id}
                  label={type}
                  name={serial}
                />
              </Grid>
            );
          })
        )}
      </Grid>
    </div>
  );
};

export default Capsules;
