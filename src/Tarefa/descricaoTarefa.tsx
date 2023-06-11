import { Grid, Typography, colors } from "@mui/material";
import { Trash } from "@phosphor-icons/react";
import Checkbox from '@mui/material/Checkbox';
import { TypeTask } from "../types";
import { AlertDialog } from "../Componentes/AlertDialog";
import { useState } from 'react';
import { exclude } from "../service/api";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

type ContactCardProps = {
  taskiData: TypeTask,
  onDelete: (id: number) => void;
}

export function Tarefa({ taskiData,onDelete }: ContactCardProps) {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const { description, done } = taskiData;

  const handleDelete = async (id: number) => {
    try {
      await exclude(id); // Chame a função exclude passando o ID da tarefa
      // Atualize a lista de tarefas após a exclusão
      // Aqui você pode utilizar a função setTasks para atualizar a lista de tarefas no estado
    } catch (error) {
      console.error('Erro ao excluir a tarefa:', error);
    }
  };

  const handleCancel = () => {
    setIsShowAlert(false);
  };

  const handleConfirm = () => {
    handleDelete();
  };

  return (
    <Grid item xl={12} sx={{
      height: '50%',
      backgroundColor: colors.grey[800],
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '5px',
      padding: '5px'
    }}>
      <Checkbox {...label} />

      <Typography>
        <span>{description} {done}</span>
      </Typography>

      <Checkbox {...label}
        icon={<Trash size={25} weight="fill" />}
        checkedIcon={<Trash size={25} weight="fill" />}
        onClick={() => { setIsShowAlert(true) }}
      />
      {isShowAlert && <AlertDialog open={isShowAlert} onCancel={handleCancel} onConfirm={handleConfirm} />}
    </Grid>
  )
}