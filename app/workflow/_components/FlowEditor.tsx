'use client';

import { Workflow } from '@prisma/client';
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import NodeComponent from './nodes/NodeComponent';
import { useEffect } from 'react';

const nodeTypes = {
  FlowScrapeNode: NodeComponent,
};

const fitViewOptions = { padding: 1 };
const snapGrid: [number, number] = [50, 50];

export default function FlowEditor({ workflow }: { workflow: Workflow }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { setViewport } = useReactFlow();

  useEffect(() => {
    try {
      const flow = JSON.parse(workflow.definition);

      if (!flow) return;

      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);
      if (!flow.viewport) return;

      const { x = 0, y = 0, zoom = 1 } = flow.viewport;

      setViewport({ x, y, zoom });
    } catch (error) {
      console.log('Error loading workflow:', error);
    }
  }, [setNodes, setEdges, setViewport, workflow.definition]);

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        snapToGrid
        snapGrid={snapGrid}
        fitViewOptions={fitViewOptions}
        fitView
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
}
