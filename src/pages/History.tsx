import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Title from "../components/Title/Title";
import { Grid } from "@mui/material";
import { States } from "../components/States";
import DataCard from "../components/Cards/DataCard/DataCard";
import { nanoid } from "nanoid";
import { ProgressBar } from "../components/NProgress/ProgressBar";
import { useGetAllHistoriesQuery } from "../store";
import dayjs from "dayjs";
import { IHistory } from "../types/history.interface";

const History = () => {
  const { data, isFetching, isLoading, error } =
    useGetAllHistoriesQuery(undefined);

  ProgressBar(isFetching || isLoading);
  return (
    <div>
      <Title label="History" icon={<BookmarksIcon fontSize="large" />} />

      <Grid container rowSpacing={2} columnSpacing={2}>
        <States
          dataLength={data?.length as number}
          error={error}
          isLoading={isLoading}
          skeletonCount={18}
          isFetching={isFetching}
        />

        {!isLoading &&
          !error &&
          (data?.length as number) > 0 &&
          data?.map((item: IHistory) => {
            const { id, details, title, event_date_utc } = item || [];
            return (
              <Grid key={nanoid()} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <DataCard
                  key={id}
                  label={dayjs(event_date_utc).format("DD MMM, YYYY")}
                  text={details}
                  name={title}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default History;
