import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ResultsPanel = ({ results, executionTime, error }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  if (error) {
    return (
      <div className="h-full bg-card rounded-lg p-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
            <Icon name="AlertCircle" size={32} className="text-destructive" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">Erreur d'Exécution</h3>
          <p className="text-sm text-text-secondary mb-4">{error}</p>
          <div className="text-xs text-text-secondary bg-muted/50 rounded-md p-3 text-left font-mono">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!results || results?.length === 0) {
    return (
      <div className="h-full bg-card rounded-lg p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Icon name="Table" size={32} className="text-text-secondary" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">Aucun Résultat</h3>
          <p className="text-sm text-text-secondary">
            Exécutez une requête pour voir les résultats ici
          </p>
        </div>
      </div>
    );
  }

  const columns = Object.keys(results?.[0]);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedResults = [...results]?.sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = a?.[sortColumn];
    const bVal = b?.[sortColumn];
    const modifier = sortDirection === 'asc' ? 1 : -1;
    return aVal > bVal ? modifier : -modifier;
  });

  return (
    <div className="flex flex-col h-full bg-card rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <Icon name="Table" size={18} className="text-accent" />
          <span className="text-sm font-medium text-text-primary">Résultats</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-text-secondary">
          <div className="flex items-center gap-1">
            <Icon name="Rows" size={14} />
            <span>{results?.length} lignes</span>
          </div>
          {executionTime && (
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              <span>{executionTime}ms</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-auto scrollbar-custom">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 sticky top-0">
            <tr>
              {columns?.map((column) => (
                <th
                  key={column}
                  onClick={() => handleSort(column)}
                  className="px-4 py-3 text-left font-medium text-text-primary cursor-pointer hover:bg-muted transition-smooth"
                >
                  <div className="flex items-center gap-2">
                    <span>{column}</span>
                    {sortColumn === column && (
                      <Icon 
                        name={sortDirection === 'asc' ? 'ChevronUp' : 'ChevronDown'} 
                        size={14} 
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedResults?.map((row, rowIndex) => (
              <tr 
                key={rowIndex}
                className="border-b border-border hover:bg-muted/30 transition-smooth"
              >
                {columns?.map((column) => (
                  <td key={column} className="px-4 py-3 text-text-secondary">
                    {row?.[column] !== null && row?.[column] !== undefined 
                      ? String(row?.[column]) 
                      : <span className="text-text-secondary/50 italic">NULL</span>
                    }
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultsPanel;