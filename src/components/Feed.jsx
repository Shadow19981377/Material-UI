import React from "react";
import { Box, Divider } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        avatarContent={{ text: "R", color: "red" }}
        cardHeader={{
          title: "Gua bao, Taiwan",
          subHeader: "September 30, 2023",
        }}
        cardImgURI={"/gua-bao.jpg"}
        CardTextContent={`The popularity of bao buns has skyrocketed in the Western world in the
          last decade or so and while these steamed buns are Chinese in origin,
          it's the Taiwanese version that's proved to be the most popular. A
          traditional gua bao consists of slices of pork belly meat dressed with
          pickled mustard greens, coriander and ground peanuts.`}
      />
      {/* <Divider  /> */}
      <Post
        avatarContent={{ text: "S", color: "skyblue" }}
        cardHeader={{
          title: "Hamburger, USA",
          subHeader: "September 23, 2023",
        }}
        cardImgURI={"/hamburger.jpg"}
        CardTextContent={`The hamburger has its roots in Germany and is named after the 
        city of Hamburg where, during the 19th century, local beef was ground and mixed 
        with onions and garlic and then formed into patties. But the dish we know and 
        love today is no doubt an American icon. The modern incarnation is attributed to 
        several Americans and is an essential part of the American food culture.`}
      />
    </Box>
  );
};

export default Feed;
