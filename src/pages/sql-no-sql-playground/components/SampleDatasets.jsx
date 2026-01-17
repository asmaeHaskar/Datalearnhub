
import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SampleDatasets = ({ selectedDb, onLoadDataset }) => {
  const datasets = {
    mysql: [
      {
        id: 'ecommerce',
        name: 'E-commerce',
        description: 'Données de boutique en ligne avec utilisateurs, produits et commandes',
        icon: 'ShoppingCart',
        tables: ['users', 'products', 'orders', 'order_items'],
        query: "-- Charger le dataset E-commerce\nSELECT * FROM users LIMIT 10;"
      },
      {
        id: 'social',
        name: 'Réseau Social',
        description: 'Données de réseau social avec utilisateurs, posts et commentaires',
        icon: 'Users',
        tables: ['users', 'posts', 'comments', 'likes'],
        query: "-- Charger le dataset Réseau Social\nSELECT * FROM posts LIMIT 10;"
      }
    ],
    postgresql: [
      {
        id: 'analytics',
        name: 'Analytics',
        description: 'Données analytiques avec événements et métriques',
        icon: 'BarChart',
        tables: ['events', 'users', 'sessions', 'conversions'],
        query: "-- Charger le dataset Analytics\nSELECT * FROM events LIMIT 10;"
      }
    ],
    mongodb: [
      {
        id: 'blog',
        name: 'Blog',
        description: 'Articles de blog avec auteurs et commentaires',
        icon: 'FileText',
        tables: ['posts', 'authors', 'comments'],
        query: "// Charger le dataset Blog\ndb.posts.find().limit(10)"
      }
    ],
    redis: [
      {
        id: 'cache',
        name: 'Cache',
        description: 'Données de cache et sessions',
        icon: 'Zap',
        tables: ['sessions', 'cache'],
        query: "-- Charger le dataset Cache\nKEYS session:*"
      }
    ]
  };

  const currentDatasets = datasets?.[selectedDb] || [];

  return (
    <div className="bg-card rounded-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Icon name="Database" size={18} className="text-primary" />
          <span className="text-sm font-medium text-text-primary">Datasets d'Exemple</span>
        </div>
      </div>
      <div className="p-4 space-y-3">
        {currentDatasets?.map((dataset) => (
          <div 
            key={dataset?.id}
            className="border border-border rounded-lg p-3 hover:border-primary/50 transition-smooth"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name={dataset?.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-text-primary mb-1">{dataset?.name}</h4>
                <p className="text-xs text-text-secondary mb-2">{dataset?.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {dataset?.tables?.map((table) => (
                    <span 
                      key={table}
                      className="text-xs px-2 py-0.5 bg-muted rounded font-mono text-text-secondary"
                    >
                      {table}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => onLoadDataset(dataset?.query)}
                  iconName="Download"
                  iconPosition="left"
                  fullWidth
                >
                  Charger le Dataset
                </Button>
              </div>
            </div>
          </div>
        ))}

        {currentDatasets?.length === 0 && (
          <div className="text-center py-6">
            <Icon name="Database" size={32} className="text-text-secondary mx-auto mb-2" />
            <p className="text-sm text-text-secondary">Aucun dataset disponible</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleDatasets;