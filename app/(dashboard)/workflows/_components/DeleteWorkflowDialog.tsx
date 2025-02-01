import { deleteWorkflow } from '@/actions/workflows/deleteWorkflow';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';

interface DeleteWorkflowDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  workflowName: string;
  workflowId: string;
}

export default function DeleteWorkflowDialog({
  open,
  setOpen,
  workflowName,
  workflowId,
}: DeleteWorkflowDialogProps) {
  const [confirmText, setConfirmText] = useState('');

  const { isPending, mutate } = useMutation({
    mutationFn: deleteWorkflow,
    onSuccess: () => {
      toast.success('Workflow deleted successfully', { id: workflowId });
      setConfirmText('');
    },
    onError: () => {
      toast.error('Failed to delete workflow', { id: workflowId });
    },
  });

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          If you delete this workflow, you will not be able to recover it.
          <div className="flex flex-col gap-2 py-4">
            <p>
              If you are sure, enter <b>{workflowName}</b> to confirm:
            </p>
            <Input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
            />
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setConfirmText('')}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            disabled={confirmText !== workflowName || isPending}
            onClick={() => {
              toast.loading('Deleting workflow...', { id: workflowId });
              mutate(workflowId);
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
