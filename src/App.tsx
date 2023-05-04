import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Button, Container, Grid, TextField, Toolbar, Typography, useTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App(){
  const theme = useTheme()
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <AppBar position='static'>
      <Toolbar sx={{
          paddingTop:theme.spacing(2),
          paddingBottom:theme.spacing(2),
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
         '@media all': { 
          minHeight: 200,
         },
      }}>
        <Typography variant='h5' component="h1">todo</Typography>
      </Toolbar>
    </AppBar>

      <main>
        <Container>
          <Grid container spacing={theme.spacing(0.5)}>
              <Grid item xl={10} sm={12}>
                  <TextField name='task' fullWidth/>
              </Grid>
              <Grid item xl={2} sm={12}>
                  <Button variant='contained' fullWidth>Criar</Button>
              </Grid>
          </Grid>
          </Container>
      </main>

    
   </ThemeProvider>
  )
}
export default App;