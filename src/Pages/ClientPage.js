import React from "react";
import { Items } from "../components/Items";
import { Typography } from '@mui/material';

export function ClientPage() {
  return (
    <>
      <Typography sx={{m:10}}>
        <Items />
      </Typography>
    </>
  );
}
