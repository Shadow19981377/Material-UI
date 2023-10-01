import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

const Post = ({ avatarContent, cardHeader, cardImgURI, CardTextContent }) => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: avatarContent.color }} aria-label="recipe">
            {avatarContent.text}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={cardHeader.title}
        subheader={cardHeader.subHeader}
      />
      <CardMedia
        component="img"
        height="20%"
        image={cardImgURI}
        alt="Gua bao"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="justify">
          {CardTextContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        {/* <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore> */}
      </CardActions>
    </Card>
  );
};

export default Post;
