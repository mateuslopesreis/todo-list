import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App(){
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <h1>TODO LIST</h1>
    
   </ThemeProvider>
  )
}
export default App;