import React, { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./MuiCard.module.scss";
import { useNavigate } from "react-router-dom";
import { textLimit } from "../../utils/TextEdit";

interface IMuiCardProps {
  name?: string;
  image?: string;
  description?: string;
  label?: string;
  pointer?: Boolean;
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
  pointer,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={linkTo ? () => navigate(`/${linkTo}`) : () => {}}
      className={styles.cardParent}
      sx={{
        cursor: pointer && "pointer",
      }}
    >
      <CardMedia component="img" height="180" image={image ? image : noImg} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {textLimit(description!, 90)}
        </Typography>
      </CardContent>
      {label && (
        <Typography className={styles.labelBtn} variant="subtitle2">
          {label}
        </Typography>
      )}
    </Card>
  );
};

export default MuiCard;
