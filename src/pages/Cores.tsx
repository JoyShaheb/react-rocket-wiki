import React from "react";
import { useEffect, useState } from "react";
import { fetchData } from "../axios/axiosHttps";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import DataCard from "../components/DataCard/DataCard";
import HubIcon from "@mui/icons-material/Hub";
import Title from "../components/Title/Title";
import { Grid } from "@mui/material";

const Cores = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const fetch: any = await fetchData(`/cores`);
      setData(fetch?.data);
      console.log(fetch?.data);
    })();
  }, []);
  return (
    <div>
      <Title label="Cores" icon={<HubIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { id, last_update, serial, status } = x || [];
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <DataCard
                  key={id}
                  label={status}
                  text={last_update}
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

export default Cores;
