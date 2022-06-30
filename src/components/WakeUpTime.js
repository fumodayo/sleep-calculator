import { Typography, Button, Stack, Grid, Box } from "@mui/material";
import React, { useContext } from "react";
import { Reply } from "@mui/icons-material";
import ThemeContext from "./ThemeContext";

const WakeUpTime = () => {
  const context = useContext(ThemeContext);

  const realTime = () => {
    const time = new Date(Date.now());
    const seconds = time.getHours() * 3600 + time.getMinutes() * 60;
    return new Date(seconds * 1000).toISOString().substring(11, 16);
  };

  const ListWakeUpTime = context.handleCalculateWakeUpTime();

  return (
    <Stack spacing="20px" justifyContent="center" alignItems="center">
      <Typography
        fontSize="28px"
        fontWeight={500}
        color="#e6d157"
        style={{ overflowWrap: "break-word" }}
      >
        Wake Up Time
      </Typography>
      <Stack>
        <Typography
          fontSize="24px"
          fontWeight={200}
          style={{ display: "inline-block" }}
        >
          The average human takes 15 minutes to fall asleep.
        </Typography>
        <Typography
          fontSize="24px"
          fontWeight={200}
          style={{ display: "inline-block" }}
        >
          To wake up refreshed at {realTime()} , you need go to sleep at one of
          the following times:
        </Typography>
      </Stack>
      <Grid
        container
        spacing={{ xs: 1, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          maxWidth: "400px",
        }}
      >
        {ListWakeUpTime.map((item) => (
          <Grid item xs={2} sm={2} md={4} key={item}>
            <Box
              variant="contained"
              className={item.id}
              sx={{
                borderRadius: "5px",
                width: "120px",
                height: "48px",
                fontSize: "24px",
                fontWeight: 600,
                backgroundColor: "#202646",
                p: 1,
              }}
              key={item.id}
            >
              {item}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Stack>
        <Typography
          fontSize="24px"
          fontWeight={200}
          style={{ display: "inline-block" }}
        >
          If you wake up at one of these times, you’ll rise in between 90-minute
          sleep cycles.
        </Typography>
        <Typography
          fontSize="24px"
          fontWeight={200}
          style={{ display: "inline-block" }}
        >
          A good night’s sleep consists of 5-6 complete sleep cycles.
        </Typography>
      </Stack>

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
        endIcon={<Reply />}
        onClick={() => context.setIsShow("calculator")}
      >
        Go Back
      </Button>
    </Stack>
  );
};

export default WakeUpTime;
