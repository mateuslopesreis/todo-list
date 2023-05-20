import { Grid, Typography, colors } from "@mui/material";
import { Trash } from "@phosphor-icons/react";
import Checkbox from '@mui/material/Checkbox';
import { TypeTask } from "../types";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


 type ContactCardProps ={
    taskiData: TypeTask
} 

/*  type ContactCardProps ={
    descricao: string
} 
 */

  
  export function Tarefa({ taskiData }: ContactCardProps) {
     const {description, done} = taskiData 
  
    return(
        
<Grid item xl={12} sx={{
    height:'50%',
    backgroundColor:colors.grey[800],
    borderRadius:'8px',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:'5px',
    padding:'5px'
   }}>
    <Checkbox {...label} />

    <Typography>
<span>{description}{done}</span>

 </Typography>

 <Checkbox {...label}

icon={<Trash size={25} weight="fill" />
}
checkedIcon={<Trash size={25} weight="fill"/>}/>

</Grid>
    )

}