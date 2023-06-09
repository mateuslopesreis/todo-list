import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Badge, Button, Card, Container, Grid, TextField, Toolbar, Typography, colors, useTheme } from '@mui/material';
import { PlusCircle , CheckFat, ClipboardText, Trash} from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { TypeTask } from './types';

import { exclude, get, save } from './service/api';
import { Tarefa } from './Tarefa/descricaoTarefa';
import { Task } from '@mui/icons-material';
import { TarefasNovas } from './TarefasNovas';
import { AlertDialog } from './Componentes/AlertDialog';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});






function App(){
  const theme = useTheme()
  const [newTask, setNewTask] = useState<TypeTask>({
    description: '',
    done: false,
  });
  const [tasks,setTasks] = useState<TypeTask[]>([])
  

  useEffect(()=>{
    async function listarTarefas(){
      setTasks(await get())
  }
  listarTarefas()

  },[])


  const pesquisaTarefa = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    let description: string = event.currentTarget.task.value
    let newTask:TypeTask={
    description:description,
    done:false
}
  save(newTask);
  setTasks([...tasks, newTask]);
  setNewTask({ description:'', done: false });
  console.log(description)

  };

  const handleDelete = async (id:any) => {
    try {
      await exclude(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
  };


  
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
      <form onSubmit={pesquisaTarefa}>
        <Container sx={{
          position: 'relative',
          paddingTop:'50px'
        }}>
          <Grid container spacing={theme.spacing(0.5)} sx={{
            position: 'absolute',
            top: '-27px'
          }}>
          
              <Grid item xl={10} sm={12}>
              
                  <TextField variant='outlined' type='text'  name="task" value={newTask.description} onChange={(event) => setNewTask({ ...newTask, description: event.target.value })} fullWidth  sx={{
                    backgroundColor:colors.grey[800],

                  }}/>
              </Grid>
              <Grid item xl={2} sm={12}>
                  <Button variant='contained'  type='submit'  fullWidth sx={{
                    height:'100%'
                  }}><span>Criar</span><PlusCircle size={32}/>
                  </Button>
               
              </Grid>
              
              <Grid container spacing={theme.spacing(1)}>
                  <Grid item sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    padding:'20px',
                    width:'100%',
                    gap:theme.spacing(1),
                    marginTop:'50px'
                     
                  }}>
                    <Typography >
                  
                      <span>Tarefas criadas</span>
                     <Badge sx={{
                      
                      paddingLeft:'15px'
                     }} color='primary' badgeContent={5} showZero></Badge>

                    </Typography>

                    <Typography>
                    <span>Concluidas</span>
                     <Badge sx={{
                      paddingLeft:'15px'
                     }}  color='primary' badgeContent={2 +'de'+ 5} showZero></Badge>
                     </Typography>
                    
                  </Grid>

                  <Grid item sx={{
                    width:'100%',
                    height:'100%',
                    borderTop:'1px solid',
                    borderRadius:'8px',
                    color:'white'
                  }}>
                    <TarefasNovas>
                   
                      
 {
                      

                      tasks.map((taski) => (
                       <Tarefa key={taski.id} taskiData={taski} onDelete={() => handleDelete(taski.id)} />
                      
                      ))
                      }          


                {/*   <Tarefa descricao={search} /> */}


</TarefasNovas>
                     
                  </Grid>
              </Grid>

          </Grid>
          </Container>
          </form>
      </main>

    
   </ThemeProvider>
  )
}
export default App;