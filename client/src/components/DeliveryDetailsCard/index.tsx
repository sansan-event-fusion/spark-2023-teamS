import { Box, Grid, Typography } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

export const DeliveryDetailsCard = () => {
  return (
    <Box>
      <Box sx={{ borderBottom: "1px solid" }}>
        <Typography
          variant="h5"
          sx={{ marginLeft: "30px", marginBottom: "30px" }}
        >
          さんさん太郎
        </Typography>
        <Typography
          fontSize="12px"
          sx={{ marginLeft: "30px", marginBottom: "10px" }}
        >
          注意事項
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginLeft: "30px", marginBottom: "30px" }}
        >
          玄関先まで配達
        </Typography>
        <Typography
          fontSize="12px"
          sx={{ marginLeft: "30px", marginBottom: "10px" }}
        >
          部屋番号・階
        </Typography>
        <Typography
          variant="h5"
          sx={{ marginLeft: "30px", marginBottom: "20px" }}
        >
          401号
        </Typography>
      </Box>
      <Box sx={{ borderBottom: "1px solid" }}>
        <Grid
          container
          spacing={1}
          sx={{ alignItems: "center", justifyItems: "space-between" }}
        >
          <Grid item>
            <HomeIcon sx={{ marginLeft: { xs: "5px", sm: "10px" } }} />
          </Grid>
          <Grid item xs={10} sx={{ marginTop: "20px" }}>
            <Typography sx={{ marginLeft: { xs: "5px", sm: "10px" } }}>
              青山オーバビル 13F
            </Typography>
            <Typography
              sx={{
                marginLeft: { xs: "5px", sm: "10px" },
                marginBottom: "20px",
              }}
            >
              〒150-0001 東京都渋谷区神宮前5-52-2
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
