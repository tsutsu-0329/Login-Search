import * as React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import Button from '@mui/material/Button';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const MyDetail = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <UnarchiveIcon />
              <UnarchiveIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              My Page
            </Typography>
            <Box sx={{m:3, textAlign:'center'}} >
              <Typography component="h2" sx={{m:3}}>
                <a href="/addItem">商品追加</a>
              </Typography>
              {/* <h2>
                <a href="/clientdetail">画像登録</a>
              </h2> */}
              <Button variant="outlined" onClick={logout}>
                ログアウト
              </Button>
            </Box>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
