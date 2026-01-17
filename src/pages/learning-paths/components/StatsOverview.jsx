import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statCards = [
    {
      icon: 'BookOpen',
      label: 'Modules en cours',
      value: stats?.inProgress,
      color: 'text-primary bg-primary/10'
    },
    {
      icon: 'CheckCircle2',
      label: 'Modules complétés',
      value: stats?.completed,
      color: 'text-accent bg-accent/10'
    },
    {
      icon: 'Award',
      label: 'Total XP gagné',
      value: stats?.totalXP?.toLocaleString('fr-FR'),
      color: 'text-warning bg-warning/10'
    },
    {
      icon: 'Clock',
      label: 'Temps d\'apprentissage',
      value: stats?.totalTime,
      color: 'text-secondary bg-secondary/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {statCards?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg p-3 md:p-4 shadow-md transition-smooth hover:shadow-lg"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-2">
            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${stat?.color} flex items-center justify-center`}>
              <Icon name={stat?.icon} size={16} className="md:w-5 md:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-lg md:text-2xl font-bold text-text-primary">
                {stat?.value}
              </div>
            </div>
          </div>
          <p className="text-xs md:text-sm text-text-secondary line-clamp-1">
            {stat?.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;