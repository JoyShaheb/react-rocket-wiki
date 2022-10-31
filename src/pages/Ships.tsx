import { useEffect, useState } from "react";
import { fetchData } from "../axios/axiosHttps";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import MuiCard from "../components/MuiCard/MuiCard";
import Title from "../components/Title/Title";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";

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
      <div className="cardContainer">
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { id, image, name, type, roles } = x || [];
            return (
              <MuiCard
                key={id}
                description={roles.join(", ")}
                name={name}
                label={type}
                image={image}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Ships;
