import { FC } from "react";
import { Stack, Typography } from "@mui/material";

interface ITitleComponent {
  label: string;
  icon?: JSX.Element | JSX.Element[];
}

const Title: FC<ITitleComponent> = ({ label, icon }) => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      gap={1}
      mb={2.5}
    >
      {icon}
      <Typography component="div" variant="h5" align="center">
        {label}
      </Typography>
    </Stack>
  );
};

export default Title;
