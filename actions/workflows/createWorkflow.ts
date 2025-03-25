'use server';

import prisma from '@/lib/prisma';
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from '@/schema/workflow';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { WorkflowStatus } from '@/types/workflow';
import { AppNode } from '@/types/appNode';
import { Edge } from '@xyflow/react';
import createFlowNode from '@/lib/workflow/createFlowNode';
import { TaskType } from '@/types/task';

export async function createWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);

  if (!success) throw new Error('Invalid form data');

  const { userId } = auth();

  if (!userId) throw new Error('Unauthenticated');

  const initialFlow: { nodes: AppNode[]; edges: Edge[] } = {
    nodes: [],
    edges: [],
  };

  initialFlow.nodes.push(createFlowNode(TaskType.LAUNCH_BROWSER));

  const result = await prisma.workflow.create({
    data: {
      ...data,
      userId,
      definition: JSON.stringify(initialFlow),
      status: WorkflowStatus.DRAFT,
    },
  });

  if (!result) throw new Error('Failed to create workflow');

  redirect(`/workflow/editor/${result.id}`);
}
