import React, { useContext } from "react";
import { Stack, TextField, Button, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { NightsStay } from "@mui/icons-material";
import { MoreTime } from "@mui/icons-material";
import ThemeContext from "./ThemeContext";

const Calculator = () => {
  const context = useContext(ThemeContext);

  return (
    <Stack
      spacing="30px"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Typography fontSize="25px" fontWeight={400}>
        What time do you want to wake up?
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopTimePicker
          inputFormat="hh:mm"
          value={context.value}
          onChange={(newValue) => {
            context.setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                svg: { color: "#fff" },
                input: { color: "#fff", fontSize: "20px" },
                label: { border: "1px solid #e1d9a8" },
                border: "1px solid #e1d9a8",
                "& .Mui-focused input": {
                  // Fix CSS Focused
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        sx={{
          width: "330px",
          height: "50px",
          fontSize: "22px",
          fontWeight: 200,
          textTransform: "none",
          backgroundColor: "#e1d9a8",
          letterSpacing: 0.88,
          boxShadow: "5px 5px 20px rgba(0, 0, 0, 1)",
          opacity: 0.91,
          color: "text.primary",
          "&:hover": {
            backgroundColor: "#e1d9a8",
            opacity: 1,
          },
        }}
        onClick={() => {
          context.setIsShow("bedtime");
        }}
        endIcon={<NightsStay />}
      >
        Calculate bedtime
      </Button>
      <Typography fontSize="25px" fontWeight={400}>
        If you want to go to bed now...
      </Typography>
      <Button
        variant="contained"
        sx={{
          width: "330px",
          height: "50px",
          fontSize: "22px",
          fontWeight: 200,
          textTransform: "none",
          backgroundColor: "#e1d9a8",
          letterSpacing: 1,
          boxShadow: "5px 5px 20px rgba(0, 0, 0, 1)",
          opacity: 0.91,
          color: "text.primary",
          "&:hover": {
            backgroundColor: "#e1d9a8",
            opacity: 1,
          },
        }}
        onClick={() => {
          context.setIsShow("wakeuptime");
        }}
        endIcon={<MoreTime />}
      >
        Calculate wake-up time
      </Button>
    </Stack>
  );
};

export default Calculator;
