import { FC } from "react";
import { CardMedia, CardContent, Card, Typography, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { textLimit } from "../../../utils/TextEdit";

interface IMuiCardProps {
  name?: string;
  image?: string;
  description?: string;
  label?: string;
  linkTo?: string;
}

const noImg =
  "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g05cyanq9qd26ioa3l3r.png";

const MuiCard: FC<IMuiCardProps> = ({
  linkTo,
  name,
  image,
  description,
  label,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={
        linkTo ? () => navigate(`/${linkTo}`) : () => console.log("hello")
      }
      sx={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        height: "100%",
        position: "relative",
      }}
    >
      <CardMedia component="img" height="180" image={image ? image : noImg} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {textLimit(description as string, 90)}
        </Typography>
      </CardContent>
      {label && (
        <Chip
          label={label}
          color="success"
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        />
      )}
    </Card>
  );
};

export default MuiCard;
