import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeChallenge = ({ 
  challenge = null,
  onComplete = () => {}
}) => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [testResults, setTestResults] = useState([]);

  const defaultChallenge = {
    id: 1,
    title: "Exercice: Requête SELECT Simple",
    description: "Écrivez une requête SQL pour récupérer tous les clients dont le nom commence par 'A' et triez-les par ordre alphabétique.",
    difficulty: "Débutant",
    points: 50,
    database: "customers",
    tables: [
      {
        name: "customers",
        columns: ["id", "name", "email", "city", "country"],
        sampleData: [
          { id: 1, name: "Alice Martin", email: "alice@example.com", city: "Paris", country: "France" },
          { id: 2, name: "Bob Dupont", email: "bob@example.com", city: "Lyon", country: "France" },
          { id: 3, name: "Antoine Bernard", email: "antoine@example.com", city: "Marseille", country: "France" }
        ]
      }
    ],
    hint: "Utilisez la clause WHERE avec l\'opérateur LIKE et le caractère joker % pour filtrer les noms. N\'oubliez pas d\'utiliser ORDER BY pour trier les résultats.",
    solution: `SELECT * FROM customers\nWHERE name LIKE 'A%'\nORDER BY name ASC;`,
    testCases: [
      { description: "Récupère uniquement les clients dont le nom commence par 'A'", passed: false },
      { description: "Les résultats sont triés par ordre alphabétique", passed: false },
      { description: "Toutes les colonnes sont incluses dans le résultat", passed: false }
    ]
  };

  const challengeData = challenge || defaultChallenge;

  const handleRunCode = () => {
    setIsRunning(true);
    setOutput('');
    setTestResults([]);

    setTimeout(() => {
      const mockOutput = `Requête exécutée avec succès!\n\nRésultats (2 lignes):\n\nid | name           | email                  | city      | country\n---|----------------|------------------------|-----------|--------\n1  | Alice Martin   | alice@example.com      | Paris     | France\n3  | Antoine Bernard| antoine@example.com    | Marseille | France\n\nTemps d'exécution: 0.023s`;
      
      setOutput(mockOutput);

      const results = challengeData?.testCases?.map((test, index) => ({
        ...test,
        passed: index < 2
      }));
      setTestResults(results);
      setIsRunning(false);

      const allPassed = results?.every(r => r?.passed);
      if (allPassed) {
        onComplete(challengeData?.points);
      }
    }, 1500);
  };

  const handleReset = () => {
    setCode('');
    setOutput('');
    setTestResults([]);
    setShowHint(false);
    setShowSolution(false);
  };

  const handleUseSolution = () => {
    setCode(challengeData?.solution);
    setShowSolution(true);
  };

  const passedTests = testResults?.filter(t => t?.passed)?.length;
  const totalTests = testResults?.length;

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Icon name="Code" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-text-primary">
                {challengeData?.title}
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                  {challengeData?.difficulty}
                </span>
                <span className="text-xs text-text-secondary flex items-center gap-1">
                  <Icon name="Award" size={12} />
                  {challengeData?.points} XP
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHint(!showHint)}
              iconName="Lightbulb"
              iconPosition="left"
            >
              Indice
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              iconName="RotateCcw"
              iconPosition="left"
            >
              Réinitialiser
            </Button>
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed">
          {challengeData?.description}
        </p>

        {showHint && (
          <div className="mt-4 p-4 bg-warning/10 rounded-lg border-l-4 border-warning">
            <div className="flex items-start gap-3">
              <Icon name="Lightbulb" size={18} className="text-warning flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-medium text-warning mb-1">Indice:</p>
                <p className="text-sm text-text-primary leading-relaxed">
                  {challengeData?.hint}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 md:p-6 border-b border-border bg-muted/30">
        <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <Icon name="Database" size={16} />
          Structure de la Base de Données
        </h4>
        <div className="space-y-3">
          {challengeData?.tables?.map((table) => (
            <div key={table?.name} className="p-3 bg-card rounded-lg border border-border">
              <p className="text-xs font-medium text-primary mb-2">
                Table: {table?.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {table?.columns?.map((col) => (
                  <span 
                    key={col}
                    className="text-xs px-2 py-1 bg-muted rounded text-text-secondary"
                  >
                    {col}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-semibold text-text-primary flex items-center gap-2">
              <Icon name="Code" size={16} />
              Éditeur SQL
            </h4>
            <Button
              variant="default"
              size="sm"
              onClick={handleRunCode}
              loading={isRunning}
              iconName="Play"
              iconPosition="left"
            >
              Exécuter
            </Button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e?.target?.value)}
            placeholder="-- Écrivez votre requête SQL ici\nSELECT * FROM customers;"
            className="w-full h-64 md:h-80 p-4 bg-background border border-border rounded-lg text-sm text-text-primary font-mono focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none scrollbar-custom"
            spellCheck={false}
          />
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs text-text-secondary">
              Lignes: {code?.split('\n')?.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleUseSolution}
              iconName="Eye"
              iconPosition="left"
            >
              Voir la Solution
            </Button>
          </div>
        </div>

        <div className="p-4 md:p-6">
          <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
            <Icon name="Terminal" size={16} />
            Résultat
          </h4>
          {output ? (
            <div className="space-y-4">
              <div className="p-4 bg-background border border-border rounded-lg">
                <pre className="text-xs text-text-primary font-mono whitespace-pre-wrap">
                  {output}
                </pre>
              </div>

              {testResults?.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-sm font-semibold text-text-primary">
                      Tests de Validation
                    </h5>
                    <span className="text-xs text-text-secondary">
                      {passedTests}/{totalTests} réussis
                    </span>
                  </div>
                  {testResults?.map((test, index) => (
                    <div
                      key={index}
                      className={`
                        p-3 rounded-lg border-2 transition-smooth
                        ${test?.passed 
                          ? 'border-accent bg-accent/10' :'border-destructive bg-destructive/10'
                        }
                      `}
                    >
                      <div className="flex items-start gap-3">
                        <Icon 
                          name={test?.passed ? "CheckCircle2" : "XCircle"} 
                          size={16} 
                          className={`flex-shrink-0 mt-0.5 ${test?.passed ? 'text-accent' : 'text-destructive'}`}
                        />
                        <span className="text-sm text-text-primary">
                          {test?.description}
                        </span>
                      </div>
                    </div>
                  ))}

                  {passedTests === totalTests && (
                    <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent mt-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Trophy" size={20} className="text-accent flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-accent mb-1">
                            Exercice Réussi!
                          </p>
                          <p className="text-xs text-text-primary">
                            Vous avez gagné {challengeData?.points} XP. Continuez vers le prochain défi!
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="h-64 md:h-80 flex items-center justify-center bg-background border border-border rounded-lg">
              <div className="text-center">
                <Icon name="Terminal" size={48} className="text-text-secondary mx-auto mb-4 opacity-50" />
                <p className="text-sm text-text-secondary">
                  Exécutez votre code pour voir les résultats
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {showSolution && (
        <div className="p-4 md:p-6 border-t border-border bg-primary/5">
          <div className="flex items-start gap-3">
            <Icon name="Eye" size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs font-medium text-primary mb-2">Solution:</p>
              <pre className="text-sm text-text-primary font-mono bg-background p-4 rounded-lg border border-border overflow-x-auto">
                {challengeData?.solution}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeChallenge;