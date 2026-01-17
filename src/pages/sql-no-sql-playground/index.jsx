import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DatabaseSelector from './components/DatabaseSelector';
import CodeEditor from './components/CodeEditor';
import ResultsPanel from './components/ResultsPanel';
import SchemaExplorer from './components/SchemaExplorer';
import ExercisePanel from './components/ExercisePanel';
import QueryHistory from './components/QueryHistory';
import AIAssistant from './components/AIAssistant';
import SampleDatasets from './components/SampleDatasets';

const SQLNoSQLPlayground = () => {
  const [selectedDb, setSelectedDb] = useState('mysql');
  const [code, setCode] = useState('-- Écrivez votre requête SQL ici\nSELECT * FROM users LIMIT 10;');
  const [results, setResults] = useState(null);
  const [executionTime, setExecutionTime] = useState(null);
  const [error, setError] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showSchema, setShowSchema] = useState(true);
  const [showExercises, setShowExercises] = useState(true);
  const [showAI, setShowAI] = useState(false);
  const [queryHistory, setQueryHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('editor');

  const mockResults = {
    mysql: [
      { id: 1, username: 'jean_dupont', email: 'jean@example.com', created_at: '2024-01-15 10:30:00' },
      { id: 2, username: 'marie_martin', email: 'marie@example.com', created_at: '2024-02-20 14:45:00' },
      { id: 3, username: 'pierre_bernard', email: 'pierre@example.com', created_at: '2024-03-10 09:15:00' },
      { id: 4, username: 'sophie_dubois', email: 'sophie@example.com', created_at: '2024-04-05 16:20:00' },
      { id: 5, username: 'luc_petit', email: 'luc@example.com', created_at: '2024-05-12 11:00:00' }
    ],
    postgresql: [
      { id: 1, name: 'Jean Dupont', email: 'jean@example.com', country: 'France' },
      { id: 2, name: 'Marie Martin', email: 'marie@example.com', country: 'Belgique' },
      { id: 3, name: 'Pierre Bernard', email: 'pierre@example.com', country: 'Suisse' }
    ],
    mongodb: [
      { _id: '507f1f77bcf86cd799439011', username: 'jean_dupont', profile: { age: 28, city: 'Paris' }, tags: ['developer', 'javascript'] },
      { _id: '507f1f77bcf86cd799439012', username: 'marie_martin', profile: { age: 32, city: 'Lyon' }, tags: ['designer', 'ui/ux'] }
    ],
    redis: [
      { key: 'session:1000', value: 'user_data_encrypted', ttl: 3600 },
      { key: 'session:1001', value: 'user_data_encrypted', ttl: 7200 }
    ]
  };

  const handleExecute = () => {
    setIsExecuting(true);
    setError(null);

    setTimeout(() => {
      const hasError = Math.random() < 0.1;

      if (hasError) {
        setError(`Erreur de syntaxe SQL: Unexpected token near 'FROM' at line 2\n\nVérifiez votre syntaxe et réessayez.`);
        setResults(null);
        setExecutionTime(null);
      } else {
        const mockTime = Math.floor(Math.random() * 50) + 10;
        setResults(mockResults?.[selectedDb]);
        setExecutionTime(mockTime);
        setError(null);
      }

      const historyEntry = {
        query: code,
        database: selectedDb,
        timestamp: new Date()?.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        success: !hasError
      };

      setQueryHistory(prev => [historyEntry, ...prev]?.slice(0, 10));
      setIsExecuting(false);
    }, 1500);
  };

  const handleDbChange = (db) => {
    setSelectedDb(db);
    setResults(null);
    setError(null);
    
    const defaultQueries = {
      mysql: '-- Écrivez votre requête SQL ici\nSELECT * FROM users LIMIT 10;',
      postgresql: '-- Écrivez votre requête PostgreSQL ici\nSELECT * FROM customers LIMIT 10;',
      mongodb: '// Écrivez votre requête MongoDB ici\ndb.users.find().limit(10)',
      redis: '-- Écrivez votre commande Redis ici\nGET user:1000'
    };
    
    setCode(defaultQueries?.[db]);
  };

  const handleLoadExercise = (exercise) => {
    setCode(`-- Exercice: ${exercise?.title}\n-- ${exercise?.description}\n\n`);
    setResults(null);
    setError(null);
  };

  const handleLoadQuery = (query) => {
    setCode(query);
  };

  const handleLoadDataset = (query) => {
    setCode(query);
  };

  const handleClearHistory = () => {
    setQueryHistory([]);
  };

  return (
    <>
      <Helmet>
        <title>SQL & NoSQL Playground - DataLearnHub</title>
        <meta name="description" content="Environnement interactif pour pratiquer SQL et NoSQL avec exécution en temps réel, exercices guidés et assistance IA" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          <div className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
            <Breadcrumb />

            <div className="mb-4 md:mb-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-text-primary mb-2">
                    Playground SQL & NoSQL
                  </h1>
                  <p className="text-sm md:text-base text-text-secondary">
                    Pratiquez vos compétences en bases de données avec un environnement d'exécution en temps réel
                  </p>
                </div>
                <Button
                  variant="default"
                  size="default"
                  onClick={() => setShowAI(true)}
                  iconName="Bot"
                  iconPosition="left"
                  className="w-full md:w-auto"
                >
                  Assistant IA
                </Button>
              </div>
            </div>

            <div className="mb-4 md:mb-6">
              <DatabaseSelector selectedDb={selectedDb} onDbChange={handleDbChange} />
            </div>

            <div className="lg:hidden mb-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                <button
                  onClick={() => setActiveTab('editor')}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-smooth
                    ${activeTab === 'editor' ? 'bg-primary text-primary-foreground' : 'bg-card text-text-secondary'}
                  `}
                >
                  <Icon name="Code" size={16} />
                  <span>Éditeur</span>
                </button>
                <button
                  onClick={() => setActiveTab('results')}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-smooth
                    ${activeTab === 'results' ? 'bg-primary text-primary-foreground' : 'bg-card text-text-secondary'}
                  `}
                >
                  <Icon name="Table" size={16} />
                  <span>Résultats</span>
                </button>
                <button
                  onClick={() => setActiveTab('schema')}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-smooth
                    ${activeTab === 'schema' ? 'bg-primary text-primary-foreground' : 'bg-card text-text-secondary'}
                  `}
                >
                  <Icon name="Database" size={16} />
                  <span>Schéma</span>
                </button>
                <button
                  onClick={() => setActiveTab('exercises')}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-smooth
                    ${activeTab === 'exercises' ? 'bg-primary text-primary-foreground' : 'bg-card text-text-secondary'}
                  `}
                >
                  <Icon name="BookOpen" size={16} />
                  <span>Exercices</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
              <div className={`lg:col-span-3 space-y-4 md:space-y-6 ${activeTab !== 'schema' && activeTab !== 'exercises' ? 'hidden lg:block' : ''}`}>
                <div className={`${activeTab !== 'schema' ? 'hidden lg:block' : ''}`}>
                  <SchemaExplorer selectedDb={selectedDb} />
                </div>
                <div className={`${activeTab !== 'exercises' ? 'hidden lg:block' : ''}`}>
                  <ExercisePanel 
                    selectedDb={selectedDb} 
                    onLoadExercise={handleLoadExercise}
                  />
                </div>
                <div className="hidden lg:block">
                  <SampleDatasets 
                    selectedDb={selectedDb}
                    onLoadDataset={handleLoadDataset}
                  />
                </div>
              </div>

              <div className="lg:col-span-9 space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                  <div className={`h-[400px] md:h-[500px] lg:h-[600px] ${activeTab !== 'editor' ? 'hidden lg:block' : ''}`}>
                    <CodeEditor
                      code={code}
                      onChange={setCode}
                      onExecute={handleExecute}
                      isExecuting={isExecuting}
                      selectedDb={selectedDb}
                    />
                  </div>

                  <div className={`h-[400px] md:h-[500px] lg:h-[600px] ${activeTab !== 'results' ? 'hidden lg:block' : ''}`}>
                    <ResultsPanel
                      results={results}
                      executionTime={executionTime}
                      error={error}
                    />
                  </div>
                </div>

                <QueryHistory
                  history={queryHistory}
                  onLoadQuery={handleLoadQuery}
                  onClearHistory={handleClearHistory}
                />
              </div>
            </div>
          </div>
        </main>

        <AIAssistant
          isOpen={showAI}
          onClose={() => setShowAI(false)}
          selectedDb={selectedDb}
        />
      </div>
    </>
  );
};

export default SQLNoSQLPlayground;