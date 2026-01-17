import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = ({ items = [] }) => {
  const location = useLocation();

  const defaultBreadcrumbs = [
    { label: 'Accueil', path: '/home-landing' }
  ];

  const pathSegments = location?.pathname?.split('/')?.filter(Boolean);
  
  const generateBreadcrumbs = () => {
    if (items?.length > 0) {
      return items;
    }

    const breadcrumbs = [...defaultBreadcrumbs];
    
    const pathMap = {
      'learning-paths': { label: 'Parcours', icon: 'BookOpen' },
      'course-content': { label: 'Contenu du Cours', icon: 'FileText' },
      'sql-no-sql-playground': { label: 'Playground', icon: 'Code' },
      'mini-projects': { label: 'Projets', icon: 'FolderKanban' },
      'user-dashboard': { label: 'Tableau de Bord', icon: 'LayoutDashboard' }
    };

    let currentPath = '';
    pathSegments?.forEach((segment) => {
      currentPath += `/${segment}`;
      const pathInfo = pathMap?.[segment];
      if (pathInfo) {
        breadcrumbs?.push({
          label: pathInfo?.label,
          path: currentPath,
          icon: pathInfo?.icon
        });
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs?.length <= 1) {
    return null;
  }

  return (
    <nav className="flex items-center gap-2 py-4" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        {breadcrumbs?.map((crumb, index) => {
          const isLast = index === breadcrumbs?.length - 1;
          const isFirst = index === 0;

          return (
            <li key={crumb?.path} className="flex items-center gap-2">
              {!isFirst && (
                <Icon 
                  name="ChevronRight" 
                  size={14} 
                  className="text-text-secondary" 
                />
              )}
              {isLast ? (
                <span className="flex items-center gap-2 text-sm font-medium text-text-primary">
                  {crumb?.icon && <Icon name={crumb?.icon} size={14} />}
                  <span className="hidden sm:inline">{crumb?.label}</span>
                  <span className="sm:hidden">{crumb?.label?.substring(0, 15)}{crumb?.label?.length > 15 ? '...' : ''}</span>
                </span>
              ) : (
                <Link
                  to={crumb?.path}
                  className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-smooth"
                >
                  {crumb?.icon && <Icon name={crumb?.icon} size={14} />}
                  <span className="hidden sm:inline">{crumb?.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;