import React from "react";
import { useEffect, useState } from "react";
import { fetchData } from "../axios/axiosHttps";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import DataCard from "../components/DataCard/DataCard";
import HubIcon from "@mui/icons-material/Hub";
import Title from "../components/Title/Title";

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
      <div className="cardContainer">
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { id, last_update, serial, status } = x || [];
            return (
              <DataCard
                key={id}
                label={status}
                text={last_update}
                name={serial}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cores;
