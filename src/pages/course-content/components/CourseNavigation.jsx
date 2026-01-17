import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CourseNavigation = ({ 
  currentModule = 'Introduction à SQL',
  onModuleSelect = () => {}
}) => {
  const [expandedSections, setExpandedSections] = useState([1]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const courseModules = [
    {
      id: 1,
      title: "Fondamentaux SQL",
      duration: "2h 30min",
      progress: 65,
      lessons: [
        { 
          id: 1, 
          title: "Introduction aux Bases de Données SQL", 
          duration: "15:42", 
          completed: true,
          type: "video"
        },
        { 
          id: 2, 
          title: "Structure des Tables", 
          duration: "12:30", 
          completed: true,
          type: "video"
        },
        { 
          id: 3, 
          title: "Clés Primaires et Étrangères", 
          duration: "18:15", 
          completed: true,
          type: "video"
        },
        { 
          id: 4, 
          title: "Quiz: Concepts de Base", 
          duration: "10 min", 
          completed: false,
          type: "quiz"
        }
      ]
    },
    {
      id: 2,
      title: "Requêtes SELECT",
      duration: "3h 15min",
      progress: 40,
      lessons: [
        { 
          id: 5, 
          title: "Syntaxe SELECT de Base", 
          duration: "20:00", 
          completed: true,
          type: "video"
        },
        { 
          id: 6, 
          title: "Clause WHERE et Filtres", 
          duration: "25:30", 
          completed: true,
          type: "video"
        },
        { 
          id: 7, 
          title: "Tri avec ORDER BY", 
          duration: "15:45", 
          completed: false,
          type: "video",
          current: true
        },
        { 
          id: 8, 
          title: "Exercice Pratique: Requêtes Simples", 
          duration: "30 min", 
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 3,
      title: "Jointures et Relations",
      duration: "4h 00min",
      progress: 0,
      lessons: [
        { 
          id: 9, 
          title: "INNER JOIN", 
          duration: "22:00", 
          completed: false,
          type: "video"
        },
        { 
          id: 10, 
          title: "LEFT et RIGHT JOIN", 
          duration: "28:15", 
          completed: false,
          type: "video"
        },
        { 
          id: 11, 
          title: "FULL OUTER JOIN", 
          duration: "18:30", 
          completed: false,
          type: "video"
        },
        { 
          id: 12, 
          title: "Exercice: Jointures Multiples", 
          duration: "45 min", 
          completed: false,
          type: "exercise"
        }
      ]
    },
    {
      id: 4,
      title: "Fonctions d\'Agrégation",
      duration: "2h 45min",
      progress: 0,
      lessons: [
        { 
          id: 13, 
          title: "COUNT, SUM, AVG", 
          duration: "20:00", 
          completed: false,
          type: "video"
        },
        { 
          id: 14, 
          title: "GROUP BY et HAVING", 
          duration: "25:00", 
          completed: false,
          type: "video"
        },
        { 
          id: 15, 
          title: "Quiz: Agrégations", 
          duration: "15 min", 
          completed: false,
          type: "quiz"
        }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSections(prev =>
      prev?.includes(sectionId)
        ? prev?.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getLessonIcon = (type) => {
    switch (type) {
      case 'video': return 'PlayCircle';
      case 'quiz': return 'HelpCircle';
      case 'exercise': return 'Code';
      default: return 'FileText';
    }
  };

  const totalProgress = Math.round(
    courseModules?.reduce((sum, module) => sum + module.progress, 0) / courseModules?.length
  );

  return (
    <>
      <Button
        variant="default"
        size="sm"
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-1000 shadow-lg"
        iconName="Menu"
        iconPosition="left"
      >
        Modules
      </Button>
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-1010 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-card shadow-2xl z-1020 lg:hidden overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
              <h3 className="text-lg font-semibold text-text-primary">
                Modules du Cours
              </h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
            <div className="p-4">
              <NavigationContent 
                courseModules={courseModules}
                expandedSections={expandedSections}
                toggleSection={toggleSection}
                getLessonIcon={getLessonIcon}
                onModuleSelect={onModuleSelect}
                totalProgress={totalProgress}
                onClose={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        </>
      )}
      <div className="hidden lg:block bg-card rounded-lg shadow-md overflow-hidden h-full">
        <div className="p-4 md:p-6 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name="BookOpen" size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg font-semibold text-text-primary">
                Contenu du Cours
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                {courseModules?.length} modules • {totalProgress}% complété
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-text-secondary mb-1">
              <span>Progression Globale</span>
              <span className="font-medium">{totalProgress}%</span>
            </div>
            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-smooth"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[calc(100vh-280px)] scrollbar-custom">
          <NavigationContent 
            courseModules={courseModules}
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            getLessonIcon={getLessonIcon}
            onModuleSelect={onModuleSelect}
            totalProgress={totalProgress}
          />
        </div>
      </div>
    </>
  );
};

const NavigationContent = ({ 
  courseModules, 
  expandedSections, 
  toggleSection, 
  getLessonIcon, 
  onModuleSelect,
  onClose = () => {}
}) => {
  return (
    <div className="space-y-2">
      {courseModules?.map((module) => (
        <div key={module.id} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection(module.id)}
            className="w-full p-4 flex items-center justify-between bg-muted/30 hover:bg-muted/50 transition-smooth"
          >
            <div className="flex items-center gap-3 flex-1">
              <Icon 
                name={expandedSections?.includes(module.id) ? "ChevronDown" : "ChevronRight"} 
                size={18} 
                className="text-text-secondary flex-shrink-0"
              />
              <div className="text-left flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-text-primary mb-1 truncate">
                  {module.title}
                </h4>
                <div className="flex items-center gap-3 text-xs text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    {module.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="CheckCircle2" size={12} />
                    {module.progress}%
                  </span>
                </div>
              </div>
            </div>
          </button>

          {expandedSections?.includes(module.id) && (
            <div className="bg-card">
              {module.lessons?.map((lesson) => (
                <button
                  key={lesson?.id}
                  onClick={() => {
                    onModuleSelect(lesson);
                    onClose();
                  }}
                  className={`
                    w-full p-4 flex items-center gap-3 border-t border-border
                    transition-smooth text-left
                    ${lesson?.current 
                      ? 'bg-primary/10 border-l-4 border-l-primary' :'hover:bg-muted/30'
                    }
                  `}
                >
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                    ${lesson?.completed 
                      ? 'bg-accent/20' 
                      : lesson?.current 
                        ? 'bg-primary/20' :'bg-muted'
                    }
                  `}>
                    <Icon 
                      name={lesson?.completed ? "CheckCircle2" : getLessonIcon(lesson?.type)} 
                      size={16} 
                      className={
                        lesson?.completed 
                          ? 'text-accent' 
                          : lesson?.current 
                            ? 'text-primary' :'text-text-secondary'
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`
                      text-sm font-medium mb-1 truncate
                      ${lesson?.current ? 'text-primary' : 'text-text-primary'}
                    `}>
                      {lesson?.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <Icon name="Clock" size={12} />
                      <span>{lesson?.duration}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseNavigation;