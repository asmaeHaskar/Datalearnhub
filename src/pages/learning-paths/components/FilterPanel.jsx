import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FilterPanel = ({ filters, onFilterChange, onClearFilters }) => {
  const difficultyOptions = [
    { value: 'all', label: 'Tous les niveaux' },
    { value: 'beginner', label: 'Débutant' },
    { value: 'intermediate', label: 'Intermédiaire' },
    { value: 'advanced', label: 'Avancé' }
  ];

  const subjectOptions = [
    { value: 'all', label: 'Tous les sujets' },
    { value: 'sql', label: 'SQL' },
   
  ];

  const statusOptions = [
    { value: 'all', label: 'Tous les statuts' },
    { value: 'not-started', label: 'Non commencé' },
    { value: 'in-progress', label: 'En cours' },
    { value: 'completed', label: 'Complété' }
  ];

  const hasActiveFilters = filters?.difficulty !== 'all' || filters?.subject !== 'all' || filters?.status !== 'all';

  return (
    <div className="bg-card rounded-lg shadow-md p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-base md:text-lg font-semibold text-text-primary">Filtres</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
          >
            Réinitialiser
          </Button>
        )}
      </div>
      <div className="space-y-4">
        <Select
          label="Niveau de difficulté"
          options={difficultyOptions}
          value={filters?.difficulty}
          onChange={(value) => onFilterChange('difficulty', value)}
        />

        <Select
          label="Sujet"
          options={subjectOptions}
          value={filters?.subject}
          onChange={(value) => onFilterChange('subject', value)}
        />

        <Select
          label="Statut de progression"
          options={statusOptions}
          value={filters?.status}
          onChange={(value) => onFilterChange('status', value)}
        />
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs md:text-sm text-text-secondary">
          <Icon name="Info" size={14} />
          <span>Utilisez les filtres pour trouver les parcours adaptés à votre niveau</span>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;