import React from 'react';
import Icon from '../../../components/AppIcon';

const DatabaseSelector = ({ selectedDb, onDbChange }) => {
  const databases = [
    { 
      id: 'mysql', 
      name: 'MySQL', 
      icon: 'Database',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    { 
      id: 'postgresql', 
      name: 'PostgreSQL', 
      icon: 'Database',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    },
    { 
      id: 'mongodb', 
      name: 'MongoDB', 
      icon: 'Leaf',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    { 
      id: 'redis', 
      name: 'Redis', 
      icon: 'Zap',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    }
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {databases?.map((db) => (
        <button
          key={db?.id}
          onClick={() => onDbChange(db?.id)}
          className={`
            flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg
            font-medium text-sm transition-smooth
            ${selectedDb === db?.id
              ? `${db?.bgColor} ${db?.color} shadow-md`
              : 'bg-muted text-text-secondary hover:bg-muted/80'
            }
          `}
        >
          <Icon name={db?.icon} size={16} />
          <span className="hidden sm:inline">{db?.name}</span>
        </button>
      ))}
    </div>
  );
};

export default DatabaseSelector;