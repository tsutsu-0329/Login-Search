import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navigate } from "react-router-dom";

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

//MUI
const theme = createTheme();

export const SignUp = () => {
  //submitの処理
  const handleSubmit = async (event) => {
    event.preventDefault();
    setPass("");
    setEmail("");
    // const data = new FormData(event.currentTarget);
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      alert("正しく入力してください");
    }
    console.log("success");
  };

  //マウントした際にログインしているのか否かを確認する処理
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  //   password変更のuseState
  const [pass, setPass] = useState("");
  const handleChangePass = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };

  // email変更のuseState
  const [email, setEmail] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  //user変更のuseState
  const [user, setUser] = useState("");

  return (
    <>
      {/* //currentUserが空出なければmypageに飛ばす処理 */}
      {user ? (
        <Navigate to={`/mypage`} />
      ) : (
        <>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign up
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        //   id="email"
                        label="Email Address"
                        name="email"
                        type="text"
                        //   autoComplete="email"
                        value={email}
                        onChange={handleChangeEmail}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        value={pass}
                        onChange={handleChangePass}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        </>
      )}
    </>
  );
};
