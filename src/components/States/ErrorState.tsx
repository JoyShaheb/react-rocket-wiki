import { FC } from "react";
import { Grid, CardMedia } from "@mui/material";
import { iErrorState } from "../../types/types";
import Error404 from "../../assets/Error404.svg";

const ErrorState: FC<iErrorState> = ({ error, isLoading }) => {
  return (
    <>
      {!isLoading && error && (
        <Grid item xs={12} justifyContent="center" display="flex">
          <CardMedia
            component="img"
            image={Error404}
            alt="Error 404 image"
            sx={{
              maxWidth: {
                xs: "100%",
                sm: "500px",
              },
              objectFit: "cover",
            }}
          />
        </Grid>
      )}
    </>
  );
};

export default ErrorState;
