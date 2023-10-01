import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Remy Sharp" src="/a1.jpg" />
          <Avatar alt="Cindy Baker" src="/a2.jpg" />
          <Avatar alt="Travis Howard" src="/a3.jpg" />
          <Avatar alt="Agnes Walker" src="/a4.jpg" />
          <Avatar alt="Trevor Robby" src="/a5.jpg" />
          <Avatar alt="Mike Henderson" src="/a6.jpg" />
          <Avatar alt="John Rich" src="/a7.jpg" />
          <Avatar alt="Brad Smith" src="/a8.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
