import { TaskType } from '@/types/task';
import { TaskRegistery } from '@/lib/workflow/task/registery';
import { Badge } from '@/components/ui/badge';
import { CoinsIcon, GripVerticalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NodeHeader({ taskType }: { taskType: TaskType }) {
  const task = TaskRegistery[taskType];

  return (
    <div className="flex items-center gap-2 p-2">
      <task.icon size={16} />
      <div className="flex w-full items-center justify-between">
        <p className="text-xs font-bold uppercase text-muted-foreground">
          {task.label}
        </p>
        <div className="flex items-center gap-1">
          {task.isEntryPoint && <Badge>Entry Point</Badge>}
          <Badge className="flex items-center gap-2 text-xs">
            <CoinsIcon size={16} />
            TODO
          </Badge>
          <Button
            variant="outline"
            size="icon"
            className="drag-handle cursor-grab"
          >
            <GripVerticalIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
