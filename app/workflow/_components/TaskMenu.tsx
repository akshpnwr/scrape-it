'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { TaskRegistery } from '@/lib/workflow/task/registery';
import { TaskType } from '@/types/task';
import { DragEvent } from 'react';

export default function TaskMenu() {
  return (
    <aside className="h-full w-[340px] min-w-[340px] max-w-[340px] border-separate overflow-auto border-r-2 p-2 px-4">
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={['extraction']}
      >
        <AccordionItem value="extraction">
          <AccordionTrigger className="font-bold">
            Data extraction
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-1">
            <TaskMenuButton taskType={TaskType.PAGE_TO_HTML} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

function TaskMenuButton({ taskType }: { taskType: TaskType }) {
  const task = TaskRegistery[taskType];

  const onDragStart = (event: DragEvent, type: TaskType) => {
    event.dataTransfer.setData('application/workflow', type);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Button
      variant="secondary"
      className="flex w-full items-center justify-between gap-2 border"
      draggable
      onDragStart={(event) => onDragStart(event, taskType)}
    >
      <div className="flex gap-2">
        <task.icon size={20} />
        {task.label}
      </div>
    </Button>
  );
}
