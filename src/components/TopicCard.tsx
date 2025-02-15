import { Topic } from '../types';
import { CodeBlock } from './CodeBlock';
import MarkdownPreview from '@uiw/react-markdown-preview';

interface TopicCardProps {
  topic: Topic;
  languageId: string;
}

export function TopicCard({ topic, languageId }: TopicCardProps) {
  return (
    <div className="glass rounded-xl p-6 space-y-4 card-hover glow">
      <h3 className="text-xl font-bold text-white">{topic.title}</h3>
      <p className="text-gray-300">{topic.description}</p>
      <div className="space-y-4">
        <CodeBlock code={topic.code} language={languageId} />
        <div className="mt-4 p-4 bg-gray-900/50 rounded-lg">
          <MarkdownPreview 
            source={topic.explanation} 
            className="text-gray-300"
          />
        </div>
      </div>
    </div>
  );
}