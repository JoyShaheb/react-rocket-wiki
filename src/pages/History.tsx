import { useEffect, useState } from "react";
import { fetchData } from "../axios/axiosHttps";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";
import DataCard from "../components/DataCard/DataCard";
import Title from "../components/Title/Title";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import dayjs from "dayjs";

const History = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const fetch: any = await fetchData(`/history`);
      setData(fetch?.data);
      console.log(fetch?.data);
    })();
  }, []);
  return (
    <div className="">
      <Title label="History" icon={<BookmarksIcon fontSize="large" />} />
      <div className="cardContainer">
        {data?.length === 0 ? (
          <LoaderComponent />
        ) : (
          data?.map((x) => {
            const { id, details, title, event_date_utc } = x || [];
            return (
              <DataCard
                key={id}
                label={dayjs(event_date_utc).format("DD MMM, YYYY")}
                text={details}
                name={title}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default History;
