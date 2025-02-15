import React from 'react';
import { Header } from '../components/Header';
import { languages } from '../data/languages';
import { BookOpen, Code, Terminal, Palette, Database, Layout } from 'lucide-react';
import { TopicCard } from '../components/TopicCard';

const icons = {
  html: Layout,
  css: Palette,
  javascript: Terminal,
  python: Code,
  react: Database,
};

export function Languages() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Master Your Programming Journey
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive guides and examples for modern web development
          </p>
        </div>
        
        <div className="grid gap-16">
          {languages.map((language, index) => {
            const Icon = icons[language.id as keyof typeof icons] || BookOpen;
            return (
              <section 
                key={language.id} 
                className="space-y-8 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-4 glass p-6 rounded-xl">
                  <div className="animate-float">
                    <Icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{language.name}</h2>
                    <p className="text-gray-400 mt-2">{language.description}</p>
                  </div>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                  {language.topics.map((topic, topicIndex) => (
                    <div 
                      className="animate-fade-in"
                      style={{ animationDelay: `${(index * 150) + (topicIndex * 100)}ms` }}
                    >
                      <TopicCard 
                        key={topic.id} 
                        topic={topic} 
                        languageId={language.id}
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <footer className="glass mt-12 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400">
            © 2024 CodeEdu Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}