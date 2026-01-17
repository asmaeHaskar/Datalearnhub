import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodeEditor = ({ 
  code, 
  onChange, 
  onExecute, 
  isExecuting, 
  selectedDb 
}) => {
  const [lineNumbers, setLineNumbers] = useState(true);

  const handleKeyDown = (e) => {
    if (e?.key === 'Tab') {
      e?.preventDefault();
      const start = e?.target?.selectionStart;
      const end = e?.target?.selectionEnd;
      const newValue = code?.substring(0, start) + '  ' + code?.substring(end);
      onChange(newValue);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const lines = code?.split('\n')?.length;

  return (
    <div className="flex flex-col h-full bg-card rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <Icon name="Code" size={18} className="text-primary" />
          <span className="text-sm font-medium text-text-primary">Éditeur de Requêtes</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLineNumbers(!lineNumbers)}
            className="p-2 rounded-md hover:bg-muted transition-smooth"
            title="Basculer les numéros de ligne"
          >
            <Icon name="Hash" size={16} className="text-text-secondary" />
          </button>
          <Button
            variant="default"
            size="sm"
            onClick={onExecute}
            loading={isExecuting}
            iconName="Play"
            iconPosition="left"
            disabled={!code?.trim()}
          >
            <span className="hidden sm:inline">Exécuter</span>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex overflow-hidden">
        {lineNumbers && (
          <div className="w-12 bg-muted/20 border-r border-border py-4 text-right pr-3 select-none">
            {Array.from({ length: lines }, (_, i) => (
              <div key={i} className="text-xs text-text-secondary leading-6">
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <textarea
          value={code}
          onChange={(e) => onChange(e?.target?.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-4 bg-transparent text-text-primary font-mono text-sm leading-6 resize-none focus:outline-none"
          placeholder={`Écrivez votre requête ${selectedDb?.toUpperCase()} ici...`}
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default CodeEditor;