import { FC } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface ITitleComponent {
  label: string;
  icon?: JSX.Element;
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
