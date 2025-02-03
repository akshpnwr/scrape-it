import { NodeProps } from '@xyflow/react';
import NodeCard from './NodeCard';

import { memo } from 'react';
import NodeHeader from './NodeHeader';
import { AppNodeData } from '@/types/appNode';

const NodeComponent = memo((props: NodeProps) => {
  const nodeData = props.data as AppNodeData;
  return (
    <NodeCard nodeId={props.id} isSelected={!!props.selected}>
      <NodeHeader taskType={nodeData.task} />
    </NodeCard>
  );
});

export default NodeComponent;
NodeComponent.displayName = 'NodeComponent';
