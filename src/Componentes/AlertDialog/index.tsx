import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import { useState } from 'react';

interface AlertDialogProps {
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
  }

export function AlertDialog({ open, onConfirm, onCancel }: AlertDialogProps) {
    const [isOpen, setIsOpen] = useState(open);
  
    const handleConfirm = () => {
      onConfirm(); // Chame a função de confirmação passada como propriedade
      setIsOpen(false); // Feche o AlertDialog após a confirmação
    };
  
    const handleCancel = () => {
      onCancel(); // Chame a função de cancelamento passada como propriedade
      setIsOpen(false); // Feche o AlertDialog após o cancelamento
    };
  
  return (
    <>
      <Dialog open={isOpen}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          <DialogContentText>Deseja realmente excluir a tarefa?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>Sim</Button>
          <Button onClick={handleCancel}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}