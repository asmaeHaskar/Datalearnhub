import React from 'react';
import Icon from '../../../components/AppIcon';

const WeeklyActivityChart = ({ weekData }) => {
  const maxMinutes = Math.max(...weekData?.map(day => day?.minutes));

  return (
    <div className="bg-card rounded-lg p-4 md:p-6 shadow-md">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <Icon name="BarChart3" size={20} className="text-primary md:w-6 md:h-6" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-semibold text-text-primary">Activité hebdomadaire</h3>
            <p className="text-xs md:text-sm text-text-secondary">Temps d'apprentissage quotidien</p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-between gap-2 md:gap-4 h-32 md:h-40">
        {weekData?.map((day, index) => {
          const heightPercentage = maxMinutes > 0 ? (day?.minutes / maxMinutes) * 100 : 0;
          const isToday = day?.isToday;

          return (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex flex-col items-center justify-end flex-1">
                <div className="relative w-full group">
                  <div 
                    className={`w-full rounded-t-md transition-smooth ${isToday ? 'bg-primary shadow-primary-glow' : 'bg-muted hover:bg-primary/50'}`}
                    style={{ height: `${heightPercentage}%`, minHeight: day?.minutes > 0 ? '8px' : '0' }}
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none whitespace-nowrap z-10">
                    <span className="text-xs text-popover-foreground font-medium">{day?.minutes} min</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className={`text-xs font-medium ${isToday ? 'text-primary' : 'text-text-secondary'}`}>
                  {day?.day}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 md:mt-6 pt-4 border-t border-border flex items-center justify-between text-xs md:text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-primary" />
          <span className="text-text-secondary">Aujourd'hui</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-muted" />
          <span className="text-text-secondary">Jours précédents</span>
        </div>
      </div>
    </div>
  );
};

export default WeeklyActivityChart;