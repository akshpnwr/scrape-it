'use server';

import prisma from '@/lib/prisma';
import {
  createWorkflowSchema,
  createWorkflowSchemaType,
} from '@/schema/workflow';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { WorkflowStatusEnum } from '@/types/workflow';

export async function createWorkflow(form: createWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);

  if (!success) throw new Error('Invalid form data');

  const { userId } = auth();

  if (!userId) throw new Error('Unauthenticated');

  const result = await prisma.workflow.create({
    data: {
      ...data,
      userId,
      definition: 'TODO',
      status: WorkflowStatusEnum.DRAFT,
    },
  });

  if (!result) throw new Error('Failed to create workflow');

  redirect(`/workflow/editor/${result.id}`);
}
