import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { AddShiftDialogProps } from "./types";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";

export const AddShiftDialog = ({
  onSubmit,
  isOpen,
  onClose,
  handleChange,
}: AddShiftDialogProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs">
      <DialogActions>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
      <DialogContent>
        <Typography>シフト日</Typography>
        <LocalizationProvider adapterLocale={ja} dateAdapter={AdapterDateFns}>
          <TextField
            size="medium"
            defaultValue=""
            id="date"
            name="date"
            variant="outlined"
            type="date"
            sx={{
              width: { xs: "200px", sm: "360px" },
              background: "white",
              marginBottom: { xs: "20px" },
            }}
            onChange={handleChange}
          />
        </LocalizationProvider>
        <Typography>開始時間</Typography>
        <TextField
          size="medium"
          defaultValue=""
          id="starts_time"
          name="starts_time"
          variant="outlined"
          type="datetime-local"
          sx={{ width: { xs: "200px", sm: "360px" }, marginBottom: "20px" }}
          onChange={handleChange}
        />
        <Typography>終了時間</Typography>
        <TextField
          size="medium"
          defaultValue=""
          id="ends_time"
          name="ends_time"
          variant="outlined"
          type="datetime-local"
          sx={{ width: { xs: "200px", sm: "360px" }, marginBottom: "20px" }}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Button
            onClick={() => {
              onSubmit();
              onClose();
            }}
            size="small"
            variant="outlined"
            style={{
              borderColor: "black",
              background: "#014A8F",
            }}
            sx={{
              color: "white",
              width: "160px",
              fontSize: "20px",
            }}
          >
            シフト追加
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
