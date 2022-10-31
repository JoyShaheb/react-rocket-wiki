import React, { FC } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./DataCard.module.scss";
import { textLimit } from "../../utils/TextEdit";

interface IDataCardProps {
  name: string;
  text: string;
  label?: string;
}
const DataCard: FC<IDataCardProps> = ({ name, text, label }) => {
  return (
    <Card
      sx={{ display: "flex", cursor: "pointer" }}
      className={styles.cardParent}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            marginTop={1}
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {text ? textLimit(text, 70) : "No updates found"}
          </Typography>
        </CardContent>
      </Box>
      {label && (
        <Typography className={styles.labelBtn} variant="caption">
          {label}
        </Typography>
      )}
    </Card>
  );
};

export default DataCard;
