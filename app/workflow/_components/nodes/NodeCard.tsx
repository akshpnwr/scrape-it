'use client';
import { cn } from '@/lib/utils';
import { useReactFlow } from '@xyflow/react';
import { ReactNode } from 'react';

export default function NodeCard({
  nodeId,
  children,
  isSelected,
}: {
  isSelected: boolean;
  nodeId: string;
  children: ReactNode;
}) {
  const { getNode, setCenter } = useReactFlow();
  return (
    <div
      onDoubleClick={() => {
        const node = getNode(nodeId);
        if (!node) return;

        const { position, measured } = node;

        if (!measured) return;

        const { width, height } = measured;
        const x = position.x + width! / 2;
        const y = position.y + height! / 2;

        if (x === undefined || y === undefined) return;

        setCenter(x, y, { zoom: 1, duration: 500 });
      }}
      className={cn(
        'flex w-[420px] border-separate cursor-pointer flex-col gap-1 rounded-md border-2 bg-background text-xs',
        isSelected && 'border-primary',
      )}
    >
      {children}
    </div>
  );
}
