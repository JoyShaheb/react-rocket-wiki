import { useGetAllCapsulesQuery } from "../store";
import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { ICapsule } from "../types/capsules.interface";
import DataCard from "../components/DataCard/DataCard";
import Title from "../components/Title/Title";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "../components/NProgress/ProgressBar";

const Capsules = () => {
  const navigate = useNavigate();
  const { data, isFetching, isError, isSuccess, isLoading, status } =
    useGetAllCapsulesQuery(undefined, {
      // pollingInterval: 5000,
    });

  console.log(data);
  ProgressBar(isFetching || isLoading);
  return (
    <div>
      <Title label="Capsules" icon={<CatchingPokemonIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        {data?.map((item: ICapsule) => {
          return (
            <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <DataCard
                name={item?.serial}
                text={item?.last_update}
                label={item?.type}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Capsules;