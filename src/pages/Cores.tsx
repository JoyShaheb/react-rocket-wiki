import HubIcon from "@mui/icons-material/Hub";
import Title from "../components/Title/Title";
import { Grid } from "@mui/material";
import { States } from "../components/States";
import { useGetAllCoresQuery } from "../store";
import DataCard from "../components/Cards/DataCard/DataCard";
import { ICores } from "../types/cores.interface";
import { nanoid } from "nanoid";

const Cores = () => {
  const { data, isFetching, isLoading, status, error } =
    useGetAllCoresQuery(undefined);
  console.log(data);
  return (
    <div>
      <Title label="Cores" icon={<HubIcon fontSize="large" />} />

      <Grid container rowSpacing={2} columnSpacing={2}>
        <States
          dataLength={data?.length as number}
          error={error}
          isLoading={isLoading}
          skeletonCount={20}
          isFetching={isFetching}
        />

        {!isLoading &&
          !error &&
          (data?.length as number) > 0 &&
          data?.map((x: ICores) => {
            const { id, last_update, serial, status } = x || [];
            return (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <DataCard
                  key={id}
                  label={status}
                  text={last_update as string}
                  name={serial}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Cores;
