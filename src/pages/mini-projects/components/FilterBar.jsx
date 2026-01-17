import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const FilterBar = ({ filters, onFilterChange }) => {
  const difficultyOptions = [
    { value: 'all', label: 'Tous les niveaux' },
    { value: 'débutant', label: 'Débutant' },
    { value: 'intermédiaire', label: 'Intermédiaire' },
    { value: 'avancé', label: 'Avancé' }
  ];

  const categoryOptions = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'sql', label: 'SQL' },
    { value: 'nosql', label: 'NoSQL' },
    { value: 'python', label: 'Python' },
    { value: 'visualization', label: 'Visualisation' },
    { value: 'ml', label: 'Machine Learning' }
  ];

  const statusOptions = [
    { value: 'all', label: 'Tous les statuts' },
    { value: 'not-started', label: 'Non commencé' },
    { value: 'in-progress', label: 'En cours' },
    { value: 'completed', label: 'Terminé' }
  ];

  const sortOptions = [
    { value: 'recommended', label: 'Recommandé' },
    { value: 'difficulty-asc', label: 'Difficulté croissante' },
    { value: 'difficulty-desc', label: 'Difficulté décroissante' },
    { value: 'time-asc', label: 'Durée croissante' },
    { value: 'time-desc', label: 'Durée décroissante' },
    { value: 'xp-desc', label: 'XP décroissant' }
  ];

  return (
    <div className="bg-card rounded-lg shadow-md p-4 md:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-base md:text-lg font-semibold text-text-primary">
            Filtres
          </h3>
        </div>
        <button
          onClick={() => onFilterChange({
            search: '',
            difficulty: 'all',
            category: 'all',
            status: 'all',
            sort: 'recommended'
          })}
          className="text-sm text-primary hover:text-primary/80 transition-smooth"
        >
          Réinitialiser
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Input
          type="search"
          placeholder="Rechercher un projet..."
          value={filters?.search}
          onChange={(e) => onFilterChange({ ...filters, search: e?.target?.value })}
          className="w-full"
        />

        <Select
          options={difficultyOptions}
          value={filters?.difficulty}
          onChange={(value) => onFilterChange({ ...filters, difficulty: value })}
          placeholder="Niveau de difficulté"
        />

        <Select
          options={categoryOptions}
          value={filters?.category}
          onChange={(value) => onFilterChange({ ...filters, category: value })}
          placeholder="Catégorie"
        />

        <Select
          options={statusOptions}
          value={filters?.status}
          onChange={(value) => onFilterChange({ ...filters, status: value })}
          placeholder="Statut"
        />

        <Select
          options={sortOptions}
          value={filters?.sort}
          onChange={(value) => onFilterChange({ ...filters, sort: value })}
          placeholder="Trier par"
        />
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {filters?.difficulty !== 'all' && (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
            Niveau: {filters?.difficulty}
            <button
              onClick={() => onFilterChange({ ...filters, difficulty: 'all' })}
              className="hover:text-primary/80"
            >
              <Icon name="X" size={12} />
            </button>
          </span>
        )}
        {filters?.category !== 'all' && (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
            Catégorie: {categoryOptions?.find(c => c?.value === filters?.category)?.label}
            <button
              onClick={() => onFilterChange({ ...filters, category: 'all' })}
              className="hover:text-primary/80"
            >
              <Icon name="X" size={12} />
            </button>
          </span>
        )}
        {filters?.status !== 'all' && (
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
            Statut: {statusOptions?.find(s => s?.value === filters?.status)?.label}
            <button
              onClick={() => onFilterChange({ ...filters, status: 'all' })}
              className="hover:text-primary/80"
            >
              <Icon name="X" size={12} />
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default FilterBar;