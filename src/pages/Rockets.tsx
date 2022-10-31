import { useEffect, useState } from "react";
import { fetchData } from "../axios/axiosHttps";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import MuiCard from "../components/MuiCard/MuiCard";
import Title from "../components/Title/Title";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const Rockets = () => {
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
      <div className="cardContainer">
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { name, id, flickr_images, description, type } = x || [];
            return (
              <MuiCard
                key={id}
                linkTo={`rockets/${id}`}
                description={description}
                name={name}
                image={flickr_images?.pop()}
                label={type}
                pointer
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Rockets;
