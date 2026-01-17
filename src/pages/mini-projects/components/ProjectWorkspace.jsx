import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ProjectWorkspace = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('instructions');
  const [codeLanguage, setCodeLanguage] = useState('sql');
  const [code, setCode] = useState('-- Écrivez votre requête SQL ici\nSELECT * FROM sales LIMIT 10;');
  const [results, setResults] = useState(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  const tabs = [
    { id: 'instructions', label: 'Instructions', icon: 'FileText' },
    { id: 'dataset', label: 'Données', icon: 'Database' },
    { id: 'code', label: 'Code', icon: 'Code' },
    { id: 'results', label: 'Résultats', icon: 'BarChart3' }
  ];

  const languageOptions = [
    { value: 'sql', label: 'SQL' },
    { value: 'python', label: 'Python' },
    { value: 'nosql', label: 'NoSQL (MongoDB)' }
  ];

  const mockTasks = [
    {
      id: 1,
      title: "Charger et explorer le dataset",
      description: "Importez les données et affichez les 10 premières lignes",
      checkpoint: "Vérifier la structure des données"
    },
    {
      id: 2,
      title: "Analyser les ventes par catégorie",
      description: "Calculez le total des ventes pour chaque catégorie de produit",
      checkpoint: "Identifier la catégorie la plus performante"
    },
    {
      id: 3,
      title: "Identifier les tendances temporelles",
      description: "Analysez l\'évolution des ventes par mois",
      checkpoint: "Créer une visualisation des tendances"
    },
    {
      id: 4,
      title: "Segmentation client",
      description: "Groupez les clients selon leur comportement d\'achat",
      checkpoint: "Définir 3-4 segments distincts"
    },
    {
      id: 5,
      title: "Créer un tableau de bord",
      description: "Construisez un dashboard avec les métriques clés",
      checkpoint: "Inclure au moins 4 visualisations"
    }
  ];

  const mockDatasetColumns = [
    { name: 'order_id', type: 'INTEGER', description: 'Identifiant unique de la commande' },
    { name: 'customer_id', type: 'INTEGER', description: 'Identifiant du client' },
    { name: 'product_name', type: 'VARCHAR', description: 'Nom du produit' },
    { name: 'category', type: 'VARCHAR', description: 'Catégorie du produit' },
    { name: 'quantity', type: 'INTEGER', description: 'Quantité commandée' },
    { name: 'price', type: 'DECIMAL', description: 'Prix unitaire' },
    { name: 'total_amount', type: 'DECIMAL', description: 'Montant total' },
    { name: 'order_date', type: 'DATE', description: 'Date de la commande' },
    { name: 'region', type: 'VARCHAR', description: 'Région de livraison' }
  ];

  const mockResults = {
    columns: ['category', 'total_sales', 'order_count'],
    rows: [
      ['Électronique', '125 450,00 €', '342'],
      ['Vêtements', '89 230,00 €', '567'],
      ['Maison & Jardin', '67 890,00 €', '234'],
      ['Sports & Loisirs', '54 320,00 €', '189'],
      ['Livres', '32 100,00 €', '456']
    ]
  };

  const handleExecuteCode = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setResults(mockResults);
      setIsExecuting(false);
      setActiveTab('results');
    }, 1500);
  };

  const toggleTaskCompletion = (taskId) => {
    setCompletedTasks(prev =>
      prev?.includes(taskId)
        ? prev?.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const renderInstructions = () => (
    <div className="space-y-4 md:space-y-6">
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 md:p-6">
        <div className="flex items-start gap-3 mb-3">
          <Icon name="Target" size={24} className="text-primary flex-shrink-0" />
          <div>
            <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">
              Objectif du Projet
            </h3>
            <p className="text-sm text-text-secondary">
              {project?.description}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-base md:text-lg font-semibold text-text-primary mb-3 md:mb-4">
          Tâches à Accomplir
        </h3>
        <div className="space-y-3">
          {mockTasks?.map((task, index) => (
            <div
              key={task?.id}
              className={`bg-card border rounded-lg p-4 transition-smooth ${
                completedTasks?.includes(task?.id) ? 'border-accent' : 'border-border'
              }`}
            >
              <div className="flex items-start gap-3">
                <button
                  onClick={() => toggleTaskCompletion(task?.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-smooth ${
                    completedTasks?.includes(task?.id)
                      ? 'bg-accent border-accent' :'border-muted hover:border-primary'
                  }`}
                >
                  {completedTasks?.includes(task?.id) && (
                    <Icon name="Check" size={14} className="text-white" />
                  )}
                </button>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-text-secondary">
                      Étape {index + 1}
                    </span>
                  </div>
                  <h4 className="text-sm md:text-base font-medium text-text-primary mb-1">
                    {task?.title}
                  </h4>
                  <p className="text-xs md:text-sm text-text-secondary mb-2">
                    {task?.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-primary">
                    <Icon name="CheckCircle2" size={14} />
                    <span>{task?.checkpoint}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 md:p-6">
        <div className="flex items-start gap-3">
          <Icon name="Lightbulb" size={20} className="text-warning flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2">
              Conseils pour Réussir
            </h4>
            <ul className="space-y-1 text-xs md:text-sm text-text-secondary">
              <li>• Commencez par explorer les données avant d'écrire du code</li>
              <li>• Validez chaque étape avant de passer à la suivante</li>
              <li>• Utilisez les visualisations pour mieux comprendre les patterns</li>
              <li>• N'hésitez pas à consulter la documentation des fonctions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDataset = () => (
    <div className="space-y-4 md:space-y-6">
      <div className="bg-card border border-border rounded-lg p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base md:text-lg font-semibold text-text-primary">
            Schéma de la Base de Données
          </h3>
          <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
            Exporter CSV
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-text-primary font-medium">Colonne</th>
                <th className="text-left py-3 px-4 text-text-primary font-medium">Type</th>
                <th className="text-left py-3 px-4 text-text-primary font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {mockDatasetColumns?.map((column, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-smooth">
                  <td className="py-3 px-4">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">
                      {column?.name}
                    </code>
                  </td>
                  <td className="py-3 px-4 text-text-secondary">{column?.type}</td>
                  <td className="py-3 px-4 text-text-secondary">{column?.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-text-primary mb-4">
          Aperçu des Données (10 premières lignes)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-3 text-text-primary font-medium whitespace-nowrap">ID</th>
                <th className="text-left py-2 px-3 text-text-primary font-medium whitespace-nowrap">Produit</th>
                <th className="text-left py-2 px-3 text-text-primary font-medium whitespace-nowrap">Catégorie</th>
                <th className="text-left py-2 px-3 text-text-primary font-medium whitespace-nowrap">Quantité</th>
                <th className="text-left py-2 px-3 text-text-primary font-medium whitespace-nowrap">Montant</th>
                <th className="text-left py-2 px-3 text-text-primary font-medium whitespace-nowrap">Date</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 })?.map((_, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-smooth">
                  <td className="py-2 px-3 text-text-secondary whitespace-nowrap">{1001 + index}</td>
                  <td className="py-2 px-3 text-text-primary whitespace-nowrap">Produit {index + 1}</td>
                  <td className="py-2 px-3 text-text-secondary whitespace-nowrap">Électronique</td>
                  <td className="py-2 px-3 text-text-secondary whitespace-nowrap">{Math.floor(Math.random() * 10) + 1}</td>
                  <td className="py-2 px-3 text-text-secondary whitespace-nowrap">{(Math.random() * 500 + 50)?.toFixed(2)} €</td>
                  <td className="py-2 px-3 text-text-secondary whitespace-nowrap">17/01/2026</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCodeEditor = () => (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <Select
          options={languageOptions}
          value={codeLanguage}
          onChange={setCodeLanguage}
          className="w-full sm:w-48"
        />
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            size="sm"
            iconName="RotateCcw"
            iconPosition="left"
            className="flex-1 sm:flex-none"
          >
            Réinitialiser
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Play"
            iconPosition="left"
            loading={isExecuting}
            onClick={handleExecuteCode}
            className="flex-1 sm:flex-none"
          >
            Exécuter
          </Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
          <span className="text-xs font-medium text-text-secondary">Éditeur de Code</span>
          <div className="flex items-center gap-2">
            <button className="text-text-secondary hover:text-text-primary transition-smooth">
              <Icon name="Copy" size={14} />
            </button>
            <button className="text-text-secondary hover:text-text-primary transition-smooth">
              <Icon name="Maximize2" size={14} />
            </button>
          </div>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e?.target?.value)}
          className="w-full h-64 md:h-80 lg:h-96 p-4 bg-background text-text-primary font-mono text-sm resize-none focus:outline-none"
          placeholder="Écrivez votre code ici..."
        />
      </div>

      <div className="bg-muted/50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <Icon name="Info" size={18} className="text-primary flex-shrink-0" />
          <div className="text-xs md:text-sm text-text-secondary">
            <p className="mb-2">
              <strong className="text-text-primary">Raccourcis clavier:</strong>
            </p>
            <ul className="space-y-1">
              <li>• Ctrl + Entrée : Exécuter le code</li>
              <li>• Ctrl + / : Commenter/Décommenter</li>
              <li>• Ctrl + Z : Annuler</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="space-y-4 md:space-y-6">
      {results ? (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="CheckCircle2" size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-text-primary">
                  Exécution Réussie
                </h3>
                <p className="text-xs md:text-sm text-text-secondary">
                  {results?.rows?.length} résultats trouvés en 0.24s
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
              Exporter
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    {results?.columns?.map((column, index) => (
                      <th key={index} className="text-left py-3 px-4 text-text-primary font-medium whitespace-nowrap">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results?.rows?.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-border hover:bg-muted/50 transition-smooth">
                      {row?.map((cell, cellIndex) => (
                        <td key={cellIndex} className="py-3 px-4 text-text-secondary whitespace-nowrap">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold text-text-primary mb-4">
              Visualisation des Résultats
            </h3>
            <div className="h-64 md:h-80 bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="BarChart3" size={48} className="text-text-secondary mx-auto mb-3" />
                <p className="text-sm text-text-secondary">
                  Graphique généré automatiquement
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
          <Icon name="PlayCircle" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">
            Aucun Résultat
          </h3>
          <p className="text-sm text-text-secondary">
            Exécutez votre code pour voir les résultats ici
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-background z-1030 overflow-hidden flex flex-col">
      <div className="bg-card border-b border-border px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 hover:bg-muted rounded-lg transition-smooth"
          >
            <Icon name="X" size={20} className="text-text-primary" />
          </button>
          <div className="min-w-0 flex-1">
            <h2 className="text-base md:text-lg font-semibold text-text-primary truncate">
              {project?.title}
            </h2>
            <p className="text-xs md:text-sm text-text-secondary truncate">
              {project?.difficulty} • {project?.estimatedTime}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button variant="outline" size="sm" iconName="Save" iconPosition="left" className="hidden sm:flex">
            Sauvegarder
          </Button>
          <Button variant="default" size="sm" iconName="Send" iconPosition="left">
            Soumettre
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:hidden border-b border-border overflow-x-auto">
          <div className="flex">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 text-sm font-medium transition-smooth border-b-2 ${
                  activeTab === tab?.id
                    ? 'text-primary border-primary' :'text-text-secondary border-transparent hover:text-text-primary'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="hidden lg:block w-64 border-r border-border bg-card overflow-y-auto">
          <div className="p-4 space-y-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground shadow-primary-glow'
                    : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            {activeTab === 'instructions' && renderInstructions()}
            {activeTab === 'dataset' && renderDataset()}
            {activeTab === 'code' && renderCodeEditor()}
            {activeTab === 'results' && renderResults()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWorkspace;