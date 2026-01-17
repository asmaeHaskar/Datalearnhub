import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statCards = [
    {
      icon: 'FolderKanban',
      label: 'Projets Disponibles',
      value: stats?.totalProjects,
      color: 'text-primary bg-primary/10'
    },
    {
      icon: 'CheckCircle2',
      label: 'Projets Terminés',
      value: stats?.completedProjects,
      color: 'text-accent bg-accent/10'
    },
    {
      icon: 'Clock',
      label: 'En Cours',
      value: stats?.inProgressProjects,
      color: 'text-warning bg-warning/10'
    },
    {
      icon: 'Award',
      label: 'XP Gagnés',
      value: `${stats?.totalXP} XP`,
      color: 'text-primary bg-primary/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
      {statCards?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-lg shadow-md p-4 md:p-6 transition-smooth hover:shadow-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${stat?.color} flex items-center justify-center`}>
              <Icon name={stat?.icon} size={20} className={stat?.color?.split(' ')?.[0]} />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-text-primary mb-1">
            {stat?.value}
          </div>
          <div className="text-xs md:text-sm text-text-secondary">
            {stat?.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsOverview;