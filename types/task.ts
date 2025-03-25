export enum TaskType {
  LAUNCH_BROWSER = 'LAUNCH_BROWSER',
  PAGE_TO_HTML = 'PAGE_TO_HTML',
}

export enum TaskParamType {
  STRING = 'STRING',
  BROWSER_INSTANCE = 'BROWSER_INSTANCE',
}

export interface TaskParam {
  name: string;
  type: TaskParamType;
  required?: boolean;
  helperText?: string;
  hideHandle?: boolean;
  [key: string]: any;
}
