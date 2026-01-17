import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsCard = ({ icon, label, value, subValue, trend, trendDirection, color = 'primary' }) => {
  const colorClasses = {
    primary: 'bg-primary/20 text-primary',
    accent: 'bg-accent/20 text-accent',
    warning: 'bg-warning/20 text-warning',
    success: 'bg-success/20 text-success'
  };

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-smooth">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${colorClasses?.[color]} flex items-center justify-center mb-3 md:mb-4`}>
            <Icon name={icon} size={20} className="md:w-6 md:h-6" />
          </div>
          <p className="text-xs md:text-sm text-text-secondary mb-1 md:mb-2">{label}</p>
          <p className="text-2xl md:text-3xl font-bold text-text-primary">{value}</p>
          {subValue && (
            <p className="text-xs md:text-sm text-text-secondary mt-1 md:mt-2">{subValue}</p>
          )}
        </div>
        {trend && (
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md ${trendDirection === 'up' ? 'bg-success/20 text-success' : 'bg-destructive/20 text-destructive'}`}>
            <Icon name={trendDirection === 'up' ? 'TrendingUp' : 'TrendingDown'} size={14} />
            <span className="text-xs font-medium">{trend}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;