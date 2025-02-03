import { AppNode } from '@/types/appNode';
import { TaskType } from '@/types/task';

export default function createFlowNode(
  nodeType: TaskType,
  position?: { x: number; y: number },
): AppNode {
  return {
    id: crypto.randomUUID(),
    type: 'FlowScrapeNode',
    dragHandle: '.drag-handle',
    data: {
      task: nodeType,
      inputs: {},
      label: 'Example',
    },
    position: position ?? { x: 0, y: 0 },
  };
}
