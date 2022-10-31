import React, { useState, useEffect } from "react";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import { fetchData } from "../axios/axiosHttps";
import DataCard from "../components/DataCard/DataCard";
import Title from "../components/Title/Title";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

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
      <div className="cardContainer">
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { type, id, last_update, serial } = x || [];
            return (
              <DataCard
                text={last_update}
                key={id}
                label={type}
                name={serial}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Capsules;
