import {
  Box,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddCardIcon from "@mui/icons-material/AddCard";

import { BuyerRequestProps } from "@/pages/buyer/request/types";

export const RequestDetailsCard = ({
  deliveryType,
  setDeliveryType,
  receiveLocation,
  setReceiveLocation,
}: BuyerRequestProps) => {
  return (
    <Card sx={{ border: "2px solid", width: { xs: "330px", sm: "560px" } }}>
      <Typography variant="h5" marginTop="10px" marginLeft="10px">
        配達場所の詳細
      </Typography>
      <Box borderBottom="1px solid">
        <Grid
          container
          spacing={1}
          sx={{ alignItems: "center", justifyItems: "space-between" }}
        >
          <Grid item>
            <LocationOnIcon sx={{ marginLeft: { xs: "5px", sm: "10px" } }} />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{ marginTop: "20px", borderBottom: "1px solid" }}
          >
            <TextField
              label="宅配物を取りに行く場所"
              name="receiving_address"
              sx={{
                width: { xs: "240px", sm: "360px" },
                marginTop: "20px",
                marginLeft: { xs: "5px", sm: "20px" },
                marginBottom: "20px",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ alignItems: "center", justifyItems: "space-between" }}
        >
          <Grid item>
            <HomeIcon sx={{ marginLeft: { xs: "5px", sm: "10px" } }} />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{ marginTop: "20px", borderBottom: "1px solid" }}
          >
            <Typography sx={{ marginLeft: { xs: "5px", sm: "10px" } }}>
              青山オーバビル 13F
            </Typography>
            <Typography sx={{ marginLeft: { xs: "5px", sm: "10px" } }}>
              〒150-0001 東京都渋谷区神宮前5-52-2
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{ alignItems: "center", justifyItems: "space-between" }}
        >
          <Grid item>
            <PermIdentityIcon sx={{ marginLeft: { xs: "5px", sm: "10px" } }} />
          </Grid>
          <Grid item xs={10} sx={{}}>
            <FormControl
              sx={{
                width: { xs: "200px", sm: "360px" },
                marginTop: "20px",
                marginLeft: "20px",
                marginBottom: "20px",
              }}
            >
              <InputLabel>受け取り場所</InputLabel>
              <Select
                value={receiveLocation}
                onChange={(e) => setReceiveLocation(e.target.value)}
              >
                <MenuItem value={"玄関先で受け取る"}>玄関先で受け取る</MenuItem>
                <MenuItem value={"玄関先に置いておく"}>
                  玄関先に置いておく
                </MenuItem>
                <MenuItem value={"外で受け取る"}>外で受け取る</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h5" marginTop="10px" marginLeft="10px">
        配達の予定時刻
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ alignItems: "center", justifyItems: "space-between" }}
      >
        <Grid item>
          <AccessTimeIcon sx={{ marginLeft: { xs: "5px", sm: "10px" } }} />
        </Grid>
        <Grid item xs={10} sx={{ borderBottom: "1px solid" }}>
          <TextField
            type="time"
            sx={{
              width: { xs: "200pxpx", sm: "360px" },
              marginTop: "20px",
              marginLeft: "20px",
              marginBottom: "20px",
            }}
          />
        </Grid>
      </Grid>
      <Box borderBottom="1px solid">
        <FormControl
          sx={{
            width: { xs: "200px", sm: "360px" },
            marginTop: "20px",
            marginLeft: "60px",
            marginBottom: "20px",
          }}
        >
          <InputLabel>配送タイプ</InputLabel>
          <Select
            value={deliveryType}
            onChange={(e) => setDeliveryType(e.target.value)}
          >
            <MenuItem value={"normal"}>通常配送(30分)</MenuItem>
            <MenuItem value={"express"}>お急ぎ便(15分)</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* <Typography variant="h5" marginTop="10px" marginLeft="10px">
        お支払い
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{ alignItems: "center", justifyItems: "space-between" }}
      >
        <Grid item>
          <AddCardIcon sx={{ marginLeft: { xs: "5px", sm: "10px" } }} />
        </Grid>
        <Grid item xs={10}>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              sx={{
                marginTop: { xs: "20px", sm: "20px" },
                marginLeft: { xs: "5px", sm: "10px" },
                marginBottom: { xs: "20px", sm: "20px" },
              }}
            >
              お支払い方法を追加する
            </Typography>
          </Box>
        </Grid>
      </Grid> */}
    </Card>
  );
};
