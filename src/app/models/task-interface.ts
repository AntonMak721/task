export interface TaskInterface {
  id: number;
  title: string;
  description?: string;
  status: boolean;
  createdAt: Date;
}


export interface NewTaskInterface{
  title: string;
  description: string;
}