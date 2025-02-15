export interface Language {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  code: string;
  explanation: string;
}