import React from "react";
import { useGetOneCapsuleQuery } from "../../store";
import { useParams } from "react-router-dom";
import { Progress } from "../../components/NProgress/ProgressBar";
import { DetailsTable } from "../../components/DetailsTable/DetailsTable";
import { Grid, Stack, Typography } from "@mui/material";
import BackButton from "../../components/BackButton/BackButton";

const CapsuleDetails = () => {
  const params = useParams<{ id: string }>();
  const { data, error, isLoading, isFetching } = useGetOneCapsuleQuery(
    params.id
  );
  Progress(isFetching);
  console.log(data);
  console.log(Array.isArray(data?.launches));

  const filteredData =
    !isLoading &&
    Object?.keys(data)
      ?.map((key) => ({ key: key, value: data[key] }))
      ?.filter((item: any) => Array?.isArray(item?.value) !== true);

  console.log(filteredData);
  return (
    <div>
      {!isLoading && !error && (
        <>
          <Grid container mb={3}>
            <Grid item xs={12} md={4}>
              <BackButton />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" textAlign="center">Details of {data?.id}</Typography>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
          <DetailsTable data={filteredData} />
        </>
      )}
    </div>
  );
};

export default CapsuleDetails;
