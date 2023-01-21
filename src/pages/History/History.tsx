import DataCard from "../../components/DataCard/DataCard";
import Title from "../../components/Title/Title";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import dayjs from "dayjs";
import { nanoid } from "@reduxjs/toolkit";
import { Grid } from "@mui/material";
import { useGetAllHistoriesQuery } from "../../store";
import LoadingState from "../../components/States/LoadingState/LoadingState";
import ErrorState from "../../components/States/ErrorState/ErrorState";
import NoDataState from "../../components/States/NoDataState/NoDataState";
import { Progress } from "../../components/NProgress/ProgressBar";

const History = () => {
  // @ts-ignore
  const { data, isLoading, error, isFetching } = useGetAllHistoriesQuery();
  Progress(isFetching);

  return (
    <div className="">
      <Title label="History" icon={<BookmarksIcon fontSize="large" />} />
      <Grid container rowSpacing={2} columnSpacing={2}>
        <LoadingState isLoading={isLoading} error={error} skeletonCount={8} />
        <ErrorState isLoading={isLoading} error={error} />
        <NoDataState
          isLoading={isLoading}
          error={error}
          dataLength={data?.length}
        />

        {!isLoading &&
          !error &&
          data?.length > 0 &&
          data?.map((x: any) => {
            const { id, details, title, event_date_utc } = x || [];
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
