'use client';

import { updateWorkflow } from '@/actions/workflows/updateWorkflow';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { useReactFlow } from '@xyflow/react';
import { CheckIcon } from 'lucide-react';
import { toast } from 'sonner';

export default function SaveBtn({ workflowId }: { workflowId: string }) {
  const { mutate, isPending } = useMutation({
    mutationFn: updateWorkflow,
    onSuccess: () => {
      toast.success('Workflow saved', { id: 'save-workflow' });
    },
    onError: () => {
      toast.error('Failed to save workflow', { id: 'save-workflow' });
    },
  });

  const { toObject } = useReactFlow();

  return (
    <Button
      disabled={isPending}
      variant="outline"
      className="flex items-center gap-2"
      onClick={() => {
        const workflowDefinition = JSON.stringify(toObject());
        toast.loading('Saving workflow...', { id: 'save-workflow' });
        mutate({ id: workflowId, definition: workflowDefinition });
      }}
    >
      <CheckIcon size={16} className="stroke-green-400" />
      Save
    </Button>
  );
}
