import { TaskParam, TaskParamType } from '@/types/task';
import StringParam from './param/StringParam';

export default function NodeParamField({ input }: { input: TaskParam }) {
  switch (input.type) {
    case TaskParamType.STRING:
      return <StringParam param={input} />;
    default:
      return <div>Not implemented</div>;
  }
}
