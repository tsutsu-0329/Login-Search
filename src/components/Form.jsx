import {
  Grid,
  GlobalStyles,
  CssBaseline,
  Container,
  Paper,
  TextField,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { StoreButton } from './StoreButton';
import { Typography } from '@mui/material';

export function Form({theme,info1, info2, info3, info4}) {
  // const { register } = useForm({
  //   defaultValues: {
  //     name: 'siesie',
  //   },
  // });

  // =================useState==================

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [tel, setTel] = useState('');
  const [explanation, setExplanation] = useState('');

  // =================onChange===================

  const handleInfo1Change = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleInfo2Change = (e) => {
    setMail(e.target.value);
    console.log({mail});
  };

  const handleInfo3Change = (e) => {
    setTel(e.target.value);
    console.log({tel});
  };

  const handleInfo4Change = (e) => {
    setExplanation(e.target.value);
    console.log({explanation});
  };

  // ============================================

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `
      ${info1}:${name},
      ${info2}:${mail},
      ${info3}:${tel},
      ${info4}:${explanation}
      `,
    );
    setName('')
    setMail('')
    setTel('')
    setExplanation('')
  };

  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{ justifyContent: 'center', mt: 5, mb: 10 }}
      >
        <Paper
          sx={{
            width: '60%', p: 3, borderRadius: '2%', m: 'auto',
          }}
        >
          <Typography 
          variant='h3'
          align='center'
          sx={{mt:2, mb:4}}
          >
            {theme}
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>

            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                 label={info1}
                 id={info1}
                 name={info1}
                 value={name}
                  variant="outlined"
                  fullWidth
                  onChange={handleInfo1Change}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                label={info2}
                value={mail}
                id={info2}
                name={info2}
                variant="outlined"
                fullWidth 
                onChange={handleInfo2Change} 
                   />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField 
                label={info3}
                value={tel}
                id={info3}
                name={info3}
                variant="outlined" 
                fullWidth 
                onChange={handleInfo3Change} />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                label={info4}
                value={explanation}
                id={info4}
                name={info4}
                variant="outlined" 
                fullWidth 
                multiline 
                rows={5}
                onChange={handleInfo4Change} />
              </Grid>

            </Grid>

            <StoreButton />
          </form>
        </Paper>
      </Container>
    </>
  );
}
