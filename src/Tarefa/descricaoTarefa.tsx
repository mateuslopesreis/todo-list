import { Grid, Typography, colors } from "@mui/material";
import { Trash } from "@phosphor-icons/react";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


type TextoTarefa = {
    descricao?: string
  }
  
  export function Tarefa({ descricao }: TextoTarefa) {
  
    return(
        
<Grid item xl={12} sx={{
    height:'50%',
    backgroundColor:colors.grey[800],
    borderRadius:'8px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
   }}>
    <Checkbox {...label} />

    <Typography>
<span>{descricao}</span>

 </Typography>

 <Checkbox {...label}

icon={<Trash size={25} weight="fill" />
}
checkedIcon={<Trash size={25} weight="fill"/>}/>

</Grid>
    )

}