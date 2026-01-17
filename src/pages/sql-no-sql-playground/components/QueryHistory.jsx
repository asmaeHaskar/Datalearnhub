import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QueryHistory = ({ history, onLoadQuery, onClearHistory }) => {
  if (history?.length === 0) {
    return (
      <div className="bg-card rounded-lg p-6 text-center">
        <Icon name="History" size={32} className="text-text-secondary mx-auto mb-2" />
        <p className="text-sm text-text-secondary">Aucun historique de requêtes</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Icon name="History" size={18} className="text-primary" />
          <span className="text-sm font-medium text-text-primary">Historique des Requêtes</span>
        </div>
        <Button
          variant="ghost"
          size="xs"
          onClick={onClearHistory}
          iconName="Trash2"
          iconPosition="left"
        >
          Effacer
        </Button>
      </div>
      <div className="max-h-64 overflow-y-auto scrollbar-custom divide-y divide-border">
        {history?.map((item, index) => (
          <div 
            key={index}
            className="p-3 hover:bg-muted/30 transition-smooth cursor-pointer"
            onClick={() => onLoadQuery(item?.query)}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className={`
                  text-xs px-2 py-0.5 rounded font-medium
                  ${item?.database === 'mysql' ? 'bg-blue-500/20 text-blue-400' : ''}
                  ${item?.database === 'postgresql' ? 'bg-indigo-500/20 text-indigo-400' : ''}
                  ${item?.database === 'mongodb' ? 'bg-green-500/20 text-green-400' : ''}
                  ${item?.database === 'redis' ? 'bg-red-500/20 text-red-400' : ''}
                `}>
                  {item?.database?.toUpperCase()}
                </span>
                {item?.success ? (
                  <Icon name="CheckCircle" size={14} className="text-accent" />
                ) : (
                  <Icon name="XCircle" size={14} className="text-destructive" />
                )}
              </div>
              <span className="text-xs text-text-secondary">{item?.timestamp}</span>
            </div>
            <pre className="text-xs text-text-secondary font-mono bg-muted/50 rounded p-2 overflow-x-auto">
              {item?.query?.length > 100 ? item?.query?.substring(0, 100) + '...' : item?.query}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QueryHistory;