import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';
import { green } from '@mui/material/colors';

export function StoreButton() {
  return (
    <Box textAlign="right" mt={2}>
      <Button
        sx={{ backgroundColor: green[500] }}
        color="primary"
        type="submit"
        variant="contained"
        size="large"
      >
        保存
      </Button>
    </Box>
  );
}
