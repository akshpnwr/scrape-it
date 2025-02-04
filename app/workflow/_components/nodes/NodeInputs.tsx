import { cn } from '@/lib/utils';
import { TaskParam } from '@/types/task';
import { Handle, Position } from '@xyflow/react';
import NodeParamField from './NodeParamField';

export default function NodeInputs({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-2 divide-y">{children}</div>;
}

export function NodeInput({
  input,
  nodeId,
}: {
  input: TaskParam;
  nodeId: string;
}) {
  return (
    <div className="relative flex w-full justify-start bg-secondary p-3">
      <NodeParamField param={input} nodeId={nodeId} />
      {input.hideHandle || (
        <Handle
          id={input.name}
          position={Position.Left}
          type="target"
          className={cn(
            '!-left-2 !h-4 !w-4 !border-2 !border-background !bg-muted-foreground',
          )}
        />
      )}
    </div>
  );
}
