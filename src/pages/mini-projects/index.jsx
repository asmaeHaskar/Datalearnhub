import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectWorkspace from './components/ProjectWorkspace';
import FilterBar from './components/FilterBar';
import StatsOverview from './components/StatsOverview';

const MiniProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    difficulty: 'all',
    category: 'all',
    status: 'all',
    sort: 'recommended'
  });

  const mockProjects = [
  {
    id: 1,
    title: "Analyse des Ventes E-commerce",
    description: "Analysez les données de ventes d'une boutique en ligne pour identifier les tendances, les produits les plus vendus et les segments de clients les plus rentables. Créez des visualisations pour présenter vos découvertes.",
    difficulty: "Débutant",
    estimatedTime: "2-3 heures",
    datasetSize: "5 000 lignes",
    xpReward: 150,
    skills: ["SQL", "Agrégation", "Jointures", "Visualisation"],
    icon: "ShoppingCart",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png",
    imageAlt: "Modern e-commerce shopping cart interface on laptop screen with product images and checkout buttons in bright office setting",
    status: "in-progress",
    progress: 45,
    category: "sql"
  },
  {
    id: 2,
    title: "Exploration de Données Utilisateur",
    description: "Explorez le comportement des utilisateurs d'une application mobile. Identifiez les patterns d'utilisation, les fonctionnalités les plus populaires et les points de friction dans le parcours utilisateur.",
    difficulty: "Intermédiaire",
    estimatedTime: "3-4 heures",
    datasetSize: "15 000 lignes",
    xpReward: 250,
    skills: ["NoSQL", "MongoDB", "Agrégation Pipeline", "Python"],
    icon: "Users",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed668d31-1764714445603.png",
    imageAlt: "Smartphone displaying colorful mobile app analytics dashboard with user engagement graphs and statistics on wooden desk",
    category: "nosql"
  },
  {
    id: 3,
    title: "Dashboard de Performance Marketing",
    description: "Construisez un tableau de bord interactif pour suivre les performances des campagnes marketing. Incluez des métriques clés comme le ROI, le taux de conversion et l'engagement par canal.",
    difficulty: "Intermédiaire",
    estimatedTime: "4-5 heures",
    datasetSize: "8 000 lignes",
    xpReward: 300,
    skills: ["SQL", "Python", "Pandas", "Matplotlib", "Seaborn"],
    icon: "TrendingUp",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecd42800-1767033343981.png",
    imageAlt: "Professional business analytics dashboard on large monitor showing colorful charts, graphs and KPI metrics in modern office",
    status: "completed",
    category: "visualization"
  },
  {
    id: 4,
    title: "Segmentation Client RFM",
    description: "Utilisez l'analyse RFM (Récence, Fréquence, Montant) pour segmenter les clients d'une entreprise. Identifiez les clients VIP, les clients à risque et proposez des stratégies de rétention.",
    difficulty: "Avancé",
    estimatedTime: "5-6 heures",
    datasetSize: "20 000 lignes",
    xpReward: 400,
    skills: ["SQL Avancé", "Python", "Clustering", "Statistiques"],
    icon: "Target",
    image: "https://images.unsplash.com/photo-1690192336223-063c7197bd29",
    imageAlt: "Business team analyzing customer segmentation data on whiteboard with colorful sticky notes and demographic charts in conference room",
    category: "python"
  },
  {
    id: 5,
    title: "Prédiction de Churn Client",
    description: "Développez un modèle de machine learning pour prédire quels clients sont susceptibles de quitter le service. Analysez les facteurs de risque et proposez des actions préventives.",
    difficulty: "Avancé",
    estimatedTime: "6-8 heures",
    datasetSize: "30 000 lignes",
    xpReward: 500,
    skills: ["Python", "Scikit-learn", "Feature Engineering", "ML"],
    icon: "Brain",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1964c9f4c-1764661525586.png",
    imageAlt: "Data scientist working on machine learning model with multiple screens showing code, neural network diagrams and prediction graphs",
    category: "ml"
  },
  {
    id: 6,
    title: "Optimisation de Stock",
    description: "Analysez les données d'inventaire pour optimiser les niveaux de stock. Identifiez les produits à rotation rapide, les surstocks et proposez une stratégie de réapprovisionnement.",
    difficulty: "Intermédiaire",
    estimatedTime: "3-4 heures",
    datasetSize: "12 000 lignes",
    xpReward: 280,
    skills: ["SQL", "Python", "Analyse Temporelle", "Prévision"],
    icon: "Package",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12ce4ac9b-1764658762607.png",
    imageAlt: "Modern warehouse interior with organized inventory shelves, barcode scanners and digital stock management system displays",
    category: "sql"
  },
  {
    id: 7,
    title: "Analyse de Sentiment Réseaux Sociaux",
    description: "Collectez et analysez les mentions d'une marque sur les réseaux sociaux. Effectuez une analyse de sentiment et identifiez les thèmes récurrents dans les conversations.",
    difficulty: "Avancé",
    estimatedTime: "5-7 heures",
    datasetSize: "25 000 lignes",
    xpReward: 450,
    skills: ["NoSQL", "Python", "NLP", "Text Mining", "Visualisation"],
    icon: "MessageSquare",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19c9089a8-1767642461861.png",
    imageAlt: "Social media analytics dashboard showing sentiment analysis graphs, trending hashtags and engagement metrics on laptop screen",
    category: "python"
  },
  {
    id: 8,
    title: "Tableau de Bord Financier",
    description: "Créez un dashboard financier complet avec des indicateurs de performance, des graphiques de tendances et des alertes automatiques pour les anomalies dans les transactions.",
    difficulty: "Débutant",
    estimatedTime: "2-3 heures",
    datasetSize: "7 000 lignes",
    xpReward: 180,
    skills: ["SQL", "Agrégation", "Visualisation", "KPI"],
    icon: "DollarSign",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f046b9b9-1765108296474.png",
    imageAlt: "Financial dashboard on tablet showing stock market graphs, revenue charts and profit indicators with calculator and documents nearby",
    category: "visualization"
  }];


  const stats = {
    totalProjects: mockProjects?.length,
    completedProjects: mockProjects?.filter((p) => p?.status === 'completed')?.length,
    inProgressProjects: mockProjects?.filter((p) => p?.status === 'in-progress')?.length,
    totalXP: mockProjects?.filter((p) => p?.status === 'completed')?.reduce((sum, p) => sum + p?.xpReward, 0)
  };

  const filterProjects = () => {
    let filtered = [...mockProjects];

    if (filters?.search) {
      filtered = filtered?.filter((project) =>
      project?.title?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      project?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase())
      );
    }

    if (filters?.difficulty !== 'all') {
      filtered = filtered?.filter((project) =>
      project?.difficulty?.toLowerCase() === filters?.difficulty?.toLowerCase()
      );
    }

    if (filters?.category !== 'all') {
      filtered = filtered?.filter((project) =>
      project?.category === filters?.category
      );
    }

    if (filters?.status !== 'all') {
      filtered = filtered?.filter((project) => {
        if (filters?.status === 'not-started') return !project?.status;
        return project?.status === filters?.status;
      });
    }

    switch (filters?.sort) {
      case 'difficulty-asc':
        filtered?.sort((a, b) => {
          const order = { 'Débutant': 1, 'Intermédiaire': 2, 'Avancé': 3 };
          return order?.[a?.difficulty] - order?.[b?.difficulty];
        });
        break;
      case 'difficulty-desc':
        filtered?.sort((a, b) => {
          const order = { 'Débutant': 1, 'Intermédiaire': 2, 'Avancé': 3 };
          return order?.[b?.difficulty] - order?.[a?.difficulty];
        });
        break;
      case 'xp-desc':
        filtered?.sort((a, b) => b?.xpReward - a?.xpReward);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredProjects = filterProjects();

  const handleStartProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseWorkspace = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <Breadcrumb />

          <div className="mb-6 md:mb-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                  Mini Projets Pratiques
                </h1>
                <p className="text-sm md:text-base text-text-secondary">
                  Appliquez vos compétences sur des projets réels avec des datasets authentiques
                </p>
              </div>
              <ProgressIndicator variant="compact" />
            </div>

            <StatsOverview stats={stats} />
          </div>

          <FilterBar filters={filters} onFilterChange={setFilters} />

          <div className="mt-6 md:mt-8">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-semibold text-text-primary">
                {filteredProjects?.length} Projet{filteredProjects?.length > 1 ? 's' : ''} Disponible{filteredProjects?.length > 1 ? 's' : ''}
              </h2>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-muted rounded-lg transition-smooth">
                  <Icon name="Grid3x3" size={20} className="text-text-secondary" />
                </button>
                <button className="p-2 hover:bg-muted rounded-lg transition-smooth">
                  <Icon name="List" size={20} className="text-text-secondary" />
                </button>
              </div>
            </div>

            {filteredProjects?.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProjects?.map((project) =>
              <ProjectCard
                key={project?.id}
                project={project}
                onStartProject={handleStartProject} />

              )}
              </div> :

            <div className="bg-card rounded-lg shadow-md p-8 md:p-12 text-center">
                <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                  Aucun Projet Trouvé
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-6">
                  Essayez de modifier vos filtres pour voir plus de projets
                </p>
                <Button
                variant="outline"
                onClick={() => setFilters({
                  search: '',
                  difficulty: 'all',
                  category: 'all',
                  status: 'all',
                  sort: 'recommended'
                })}>

                  Réinitialiser les Filtres
                </Button>
              </div>
            }
          </div>

          <div className="mt-8 md:mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/20 flex items-center justify-center">
                <Icon name="Lightbulb" size={32} className="text-primary" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                  Besoin d'Aide pour Démarrer ?
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-4">
                  Consultez nos guides et tutoriels pour apprendre les meilleures pratiques d'analyse de données
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                  <Button variant="default" iconName="BookOpen" iconPosition="left">
                    Voir les Guides
                  </Button>
                  <Button variant="outline" iconName="Video" iconPosition="left">
                    Tutoriels Vidéo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedProject &&
      <ProjectWorkspace
        project={selectedProject}
        onClose={handleCloseWorkspace} />

      }
    </>);

};

export default MiniProjects;