import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import {useState} from 'react';

export function AlertDialog({open}){
    const[isOpen, setIsOpen] = useState(true)

    return(
        <>
            <Dialog open={isOpen}>
                <DialogTitle>Confirmar Exclusão</DialogTitle>
                <DialogContent>
                        <DialogContentText>
                            Deseja realmente excluir a tarefa
                        </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button>Sim</Button>
                    <Button onClick={()=>setIsOpen(false)}>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}