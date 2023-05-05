import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Badge, Button, Container, Grid, TextField, Toolbar, Typography, colors, useTheme } from '@mui/material';
import { PlusCircle , CheckFat} from '@phosphor-icons/react';

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
      }}
      >
        <Typography variant='h5' component="h1" sx={{
          display:'flex',
          alignItem:'center',
          gap:theme.spacing(2),
          color:theme.palette.primary.light
        }}>
         <CheckFat size={32} weight="fill"/> Lista de Tarefas</Typography>
      </Toolbar>
    </AppBar>

      <main>
        <Container sx={{
          position: 'relative',
          paddingTop:'50px'
        }}>
          <Grid container spacing={theme.spacing(0.5)} sx={{
            position: 'absolute',
            top: '-27px'
          }}>
              <Grid item xl={10} sm={12}>
                  <TextField variant='outlined' name='task' fullWidth  sx={{
                    backgroundColor:colors.grey[800],

                  }}/>
              </Grid>
              <Grid item xl={2} sm={12}>
                  <Button variant='contained' fullWidth sx={{
                    height:'100%'
                  }}><span>Criar</span><PlusCircle size={32}/>
                  </Button>
              </Grid>

              <Grid container spacing={theme.spacing(1)}>
                  <Grid item>
                    <Typography variant='caption' sx={{
                      display:'flex',
                      alignItems:'center',
                      gap:theme.spacing(1)
                    }}>
                      <span>Tarefas criadas</span>
                     <Badge color='primary' badgeContent={0} showZero></Badge>
                    </Typography>
                  </Grid>
              </Grid>

          </Grid>
          </Container>
      </main>

    
   </ThemeProvider>
  )
}
export default App;