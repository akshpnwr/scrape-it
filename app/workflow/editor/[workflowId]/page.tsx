import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';
import Editor from '../../_components/Editor';

export default async function Page({
  params,
}: {
  params: { workflowId: string };
}) {
  const { workflowId } = params;
  const { userId } = auth();

  if (!userId) return <div>Unauthenticated</div>;

  const workflow = await prisma.workflow.findUnique({
    where: {
      userId,
      id: workflowId,
    },
  });

  if (!workflow) return <div>Workflow not found</div>;

  return <Editor workflow={workflow} />;
}
