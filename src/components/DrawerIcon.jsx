import React, { useEffect, useState } from "react";
import GuestIcon from "../image/9984792i.jpeg";
import Icon from "../image/79b2b6041672c2b41c7bffca32c1df4a.png";
//fireBase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { Avatar, Container } from '@mui/material';
import { Typography } from '@mui/material';
import { CssBaseline } from '@mui/material';

export function DrawerIcon() {
  const [user, setUser] = useState("");
  //firebaseログインしてるか確認
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
    <CssBaseline/>
    <Container sx={{textAlign:'center'}}>
      <Typography  sx={{m:3}} align='center'>
        {user ? (
          <Avatar sx={{ height: '150px', width:'150px', objectFit:'cover', margin:'auto' }} src={Icon} />
        ) : (
          <Avatar src={GuestIcon} sx={{ height: '150px', width:'150px', objectFit:'cover', margin:'auto' }}/>
        )}
      </Typography>
      {user ? (
        <Typography variant="p" sx={{justifyContent:'center'}} >{user.email}</Typography>
      ) : (
        <Typography variant="p" >Hello, Guest</Typography>
      )}
      </Container>
    </>
  );
}
export default DrawerIcon;
