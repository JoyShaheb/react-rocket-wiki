import { FC } from "react";
import { CardMedia, CardContent, Card, Typography } from "@mui/material";
// import styles from "./MuiCard.module.scss";
import { useNavigate } from "react-router-dom";
import { textLimit } from "../../../utils/TextEdit";

interface IMuiCardProps {
  name?: string;
  image?: string;
  description?: string;
  label?: string;
  pointer?: boolean;
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
      onClick={
        linkTo ? () => navigate(`/${linkTo}`) : () => console.log("hello")
      }
      // className={styles.cardParent}
      sx={{
        display: "flex",
        flexDirection: "column",
        // cursor: pointer && "pointer",
        height: "100%",
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
        <Typography
          // className={styles.labelBtn}
          variant="subtitle2"
        >
          {label}
        </Typography>
      )}
    </Card>
  );
};

export default MuiCard;
