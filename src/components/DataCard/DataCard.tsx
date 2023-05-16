import { FC } from "react";
import { Chip, Typography, Card, Box, CardContent } from "@mui/material";
import { textLimit } from "../../utils/TextEdit";

interface IDataCardProps {
  name: string;
  text: string;
  label?: string;
  onClick?: () => void;
}
const DataCard: FC<IDataCardProps> = ({ name, text, label, onClick }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        height: "100%",
      }}
      onClick={onClick}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent
          sx={{ flex: "1 0 auto", display: "flex", flexDirection: "column" }}
        >
          {label && (
            <Chip
              label={label}
              color="success"
              size="small"
              sx={{
                alignSelf: "flex-end",
              }}
            />
          )}
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
    </Card>
  );
};

export default DataCard;
