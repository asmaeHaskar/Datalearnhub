import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Breadcrumb from '../../components/ui/Breadcrumb';
import ProgressIndicator from '../../components/ui/ProgressIndicator';
import TrackCard from './components/TrackCard';
import FilterPanel from './components/FilterPanel';
import RecommendationCard from './components/RecommendationCard';
import StatsOverview from './components/StatsOverview';
import BookmarkedModules from './components/BookmarkedModules';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const LearningPaths = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    difficulty: 'all',
    subject: 'all',
    status: 'all'
  });

  const [showFilters, setShowFilters] = useState(false);

  const learningTracks = [
    {
      id: 1,
      title: "Parcours Débutant",
      difficulty: "Débutant",
      description: "Commencez votre voyage dans le monde des données avec les fondamentaux de SQL et des bases de données. Apprenez les concepts essentiels et les requêtes de base pour manipuler et interroger des données.",
      estimatedTime: "40-50 heures",
      totalModules: 8,
      completedModules: 3,
      completionPercentage: 38,
      totalXP: 2400,
      modules: [
        {
          id: 101,
          title: "Introduction aux bases de données",
          description: "Découvrez les concepts fondamentaux des bases de données relationnelles, leur structure et leur importance dans le monde moderne.",
          duration: "4h 30min",
          lessons: 12,
          xp: 250,
          progress: 100,
          isCompleted: true,
          isLocked: false,
          isNew: false
        },
        {
          id: 102,
          title: "SQL Basics - SELECT et WHERE",
          description: "Maîtrisez les requêtes SELECT de base et apprenez à filtrer vos données avec la clause WHERE pour extraire des informations précises.",
          duration: "5h 15min",
          lessons: 15,
          xp: 300,
          progress: 100,
          isCompleted: true,
          isLocked: false,
          isNew: false
        },
        {
          id: 103,
          title: "Jointures et relations",
          description: "Comprenez comment relier plusieurs tables entre elles avec les différents types de jointures (INNER, LEFT, RIGHT, FULL).",
          duration: "6h 00min",
          lessons: 18,
          xp: 350,
          progress: 45,
          isCompleted: false,
          isLocked: false,
          isNew: false
        },
        {
          id: 104,
          title: "Fonctions d\'agrégation",
          description: "Utilisez COUNT, SUM, AVG, MIN, MAX et GROUP BY pour analyser et résumer vos données efficacement.",
          duration: "4h 45min",
          lessons: 14,
          xp: 300,
          progress: 0,
          isCompleted: false,
          isLocked: false,
          isNew: true
        },
        {
          id: 105,
          title: "Sous-requêtes et CTE",
          description: "Apprenez à créer des requêtes complexes avec des sous-requêtes et des Common Table Expressions pour des analyses avancées.",
          duration: "5h 30min",
          lessons: 16,
          xp: 350,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Fonctions d\'agrégation"
        },
        {
          id: 106,
          title: "Manipulation de données (INSERT, UPDATE, DELETE)",
          description: "Maîtrisez les opérations CRUD pour insérer, modifier et supprimer des données dans vos bases de données.",
          duration: "4h 00min",
          lessons: 12,
          xp: 250,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Sous-requêtes et CTE"
        },
        {
          id: 107,
          title: "Contraintes et intégrité des données",
          description: "Découvrez comment garantir la qualité et la cohérence de vos données avec les contraintes PRIMARY KEY, FOREIGN KEY, UNIQUE et CHECK.",
          duration: "3h 45min",
          lessons: 10,
          xp: 200,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Manipulation de données"
        },
        {
          id: 108,
          title: "Projet pratique - Gestion de bibliothèque",
          description: "Mettez en pratique toutes vos connaissances en créant une base de données complète pour gérer une bibliothèque avec livres, auteurs et emprunts.",
          duration: "8h 00min",
          lessons: 6,
          xp: 400,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Contraintes et intégrité des données"
        }
      ]
    },
    {
      id: 2,
      title: "Parcours Intermédiaire",
      difficulty: "Intermédiaire",
      description: "Approfondissez vos compétences avec SQL avancé, NoSQL et Python pour l'analyse de données. Explorez les techniques d'optimisation et les bases de données non relationnelles.",
      estimatedTime: "60-75 heures",
      totalModules: 10,
      completedModules: 0,
      completionPercentage: 0,
      totalXP: 3500,
      modules: [
        {
          id: 201,
          title: "SQL Avancé - Optimisation de requêtes",
          description: "Apprenez à analyser et optimiser vos requêtes SQL avec les index, les plans d'exécution et les techniques de performance.",
          duration: "6h 30min",
          lessons: 20,
          xp: 400,
          progress: 0,
          isCompleted: false,
          isLocked: false,
          isNew: false
        },
        {
          id: 202,
          title: "Fonctions de fenêtre (Window Functions)",
          description: "Maîtrisez les fonctions analytiques comme ROW_NUMBER, RANK, LAG, LEAD pour des analyses complexes sans jointures.",
          duration: "5h 45min",
          lessons: 18,
          xp: 350,
          progress: 0,
          isCompleted: false,
          isLocked: false,
          isNew: true
        },
        {
          id: 203,
          title: "Procédures stockées et triggers",
          description: "Créez des procédures stockées et des déclencheurs pour automatiser les opérations et maintenir l'intégrité des données.",
          duration: "7h 00min",
          lessons: 22,
          xp: 400,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "SQL Avancé - Optimisation de requêtes"
        },
        {
          id: 204,
          title: "Introduction à MongoDB",
          description: "Découvrez le monde NoSQL avec MongoDB, ses documents JSON et ses opérations CRUD dans un environnement non relationnel.",
          duration: "6h 15min",
          lessons: 19,
          xp: 350,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Procédures stockées et triggers"
        },
        {
          id: 205,
          title: "Agrégation et pipeline MongoDB",
          description: "Maîtrisez le framework d'agrégation de MongoDB pour effectuer des transformations et analyses de données complexes.",
          duration: "5h 30min",
          lessons: 17,
          xp: 300,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Introduction à MongoDB"
        },
        {
          id: 206,
          title: "Redis - Cache et structures de données",
          description: "Explorez Redis pour le caching haute performance et ses structures de données avancées (listes, sets, hashes).",
          duration: "4h 45min",
          lessons: 15,
          xp: 250,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: true,
          prerequisites: "Agrégation et pipeline MongoDB"
        },
        {
          id: 207,
          title: "Python pour l'analyse de données",
          description: "Apprenez à utiliser Python avec pandas, numpy et matplotlib pour analyser et visualiser des données extraites de bases de données.",
          duration: "8h 00min",
          lessons: 24,
          xp: 450,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Redis - Cache et structures de données"
        },
        {
          id: 208,
          title: "Connexion Python-SQL avec SQLAlchemy",
          description: "Intégrez vos bases de données SQL avec Python en utilisant SQLAlchemy pour des applications robustes et maintenables.",
          duration: "6h 30min",
          lessons: 20,
          xp: 350,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Python pour l'analyse de données"
        },
        {
          id: 209,
          title: "ETL et pipelines de données",
          description: "Créez des pipelines ETL (Extract, Transform, Load) pour automatiser le traitement et le transfert de données entre systèmes.",
          duration: "7h 15min",
          lessons: 22,
          xp: 400,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Connexion Python-SQL avec SQLAlchemy"
        },
        {
          id: 210,
          title: "Projet pratique - Tableau de bord e-commerce",
          description: "Construisez un tableau de bord complet d'analyse e-commerce en combinant SQL, MongoDB, Python et visualisations interactives.",
          duration: "10h 00min",
          lessons: 8,
          xp: 500,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "ETL et pipelines de données"
        }
      ]
    },
    {
      id: 3,
      title: "Parcours Avancé",
      difficulty: "Avancé",
      description: "Devenez expert en visualisation de données, machine learning et architectures big data. Maîtrisez les outils et techniques utilisés par les data scientists professionnels.",
      estimatedTime: "80-100 heures",
      totalModules: 12,
      completedModules: 0,
      completionPercentage: 0,
      totalXP: 4800,
      modules: [
        {
          id: 301,
          title: "Visualisation avancée avec D3.js",
          description: "Créez des visualisations de données interactives et personnalisées avec la puissante bibliothèque D3.js pour des insights visuels impactants.",
          duration: "8h 30min",
          lessons: 26,
          xp: 450,
          progress: 0,
          isCompleted: false,
          isLocked: false,
          isNew: false
        },
        {
          id: 302,
          title: "Dashboards avec Plotly et Dash",
          description: "Développez des tableaux de bord analytiques interactifs en temps réel avec Plotly et le framework Dash de Python.",
          duration: "7h 45min",
          lessons: 24,
          xp: 400,
          progress: 0,
          isCompleted: false,
          isLocked: false,
          isNew: true
        },
        {
          id: 303,
          title: "Introduction au Machine Learning",
          description: "Découvrez les concepts fondamentaux du ML: régression, classification, clustering et les algorithmes de base avec scikit-learn.",
          duration: "9h 00min",
          lessons: 28,
          xp: 500,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Dashboards avec Plotly et Dash"
        },
        {
          id: 304,
          title: "Préparation et nettoyage de données",
          description: "Maîtrisez les techniques de data cleaning, feature engineering et preprocessing pour préparer vos données au machine learning.",
          duration: "7h 30min",
          lessons: 23,
          xp: 400,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Introduction au Machine Learning"
        },
        {
          id: 305,
          title: "Modèles de classification avancés",
          description: "Explorez les algorithmes de classification avancés: Random Forest, Gradient Boosting, XGBoost et techniques d'ensemble.",
          duration: "8h 15min",
          lessons: 25,
          xp: 450,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: true,
          prerequisites: "Préparation et nettoyage de données"
        },
        {
          id: 306,
          title: "Séries temporelles et prévisions",
          description: "Analysez et prédisez des données temporelles avec ARIMA, Prophet et les réseaux de neurones récurrents (RNN).",
          duration: "7h 00min",
          lessons: 22,
          xp: 400,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Modèles de classification avancés"
        },
        {
          id: 307,
          title: "Deep Learning avec TensorFlow",
          description: "Plongez dans le deep learning avec TensorFlow et Keras pour créer des réseaux de neurones profonds et des modèles complexes.",
          duration: "10h 00min",
          lessons: 30,
          xp: 550,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Séries temporelles et prévisions"
        },
        {
          id: 308,
          title: "NLP - Traitement du langage naturel",
          description: "Explorez le NLP avec les transformers, BERT et GPT pour l'analyse de sentiments, la classification de textes et la génération.",
          duration: "9h 30min",
          lessons: 29,
          xp: 500,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: true,
          prerequisites: "Deep Learning avec TensorFlow"
        },
        {
          id: 309,
          title: "Big Data avec Apache Spark",
          description: "Traitez des volumes massifs de données avec Apache Spark, PySpark et les architectures distribuées pour le big data.",
          duration: "8h 45min",
          lessons: 27,
          xp: 450,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "NLP - Traitement du langage naturel"
        },
        {
          id: 310,
          title: "MLOps et déploiement de modèles",
          description: "Apprenez à déployer, monitorer et maintenir des modèles ML en production avec Docker, Kubernetes et MLflow.",
          duration: "7h 30min",
          lessons: 24,
          xp: 400,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Big Data avec Apache Spark"
        },
        {
          id: 311,
          title: "Architecture de données moderne",
          description: "Concevez des architectures data modernes avec data lakes, data warehouses, streaming et architectures lambda/kappa.",
          duration: "8h 00min",
          lessons: 25,
          xp: 450,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "MLOps et déploiement de modèles"
        },
        {
          id: 312,
          title: "Projet final - Système de recommandation complet",
          description: "Créez un système de recommandation end-to-end avec ML, big data, API REST et interface utilisateur pour un cas d'usage réel.",
          duration: "12h 00min",
          lessons: 10,
          xp: 600,
          progress: 0,
          isCompleted: false,
          isLocked: true,
          isNew: false,
          prerequisites: "Architecture de données moderne"
        }
      ]
    }
  ];

  const stats = {
    inProgress: 3,
    completed: 5,
    totalXP: 2450,
    totalTime: "42h 30min"
  };

  const recommendation = {
    title: "Fonctions d\'agrégation",
    description: "Continuez votre parcours débutant avec les fonctions d'agrégation pour analyser vos données plus efficacement.",
    duration: "4h 45min",
    xp: 300,
    matchScore: 95,
    reason: "Vous avez complété les jointures avec succès",
    goal: "Maîtriser l'analyse de données SQL"
  };

  const [bookmarks, setBookmarks] = useState([
    {
      id: 103,
      title: "Jointures et relations",
      track: "Parcours Débutant",
      duration: "6h 00min",
      progress: 45
    },
    {
      id: 202,
      title: "Fonctions de fenêtre (Window Functions)",
      track: "Parcours Intermédiaire",
      duration: "5h 45min",
      progress: 0
    }
  ]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      difficulty: 'all',
      subject: 'all',
      status: 'all'
    });
  };

  const handleModuleClick = (module) => {
    if (!module.isLocked) {
      navigate('/course-content');
    }
  };

  const handleRemoveBookmark = (bookmarkId) => {
    setBookmarks(prev => prev?.filter(b => b?.id !== bookmarkId));
  };

  const filteredTracks = learningTracks?.filter(track => {
    if (filters?.difficulty !== 'all') {
      const difficultyMap = {
        'beginner': 'Débutant',
        'intermediate': 'Intermédiaire',
        'advanced': 'Avancé'
      };
      if (track?.difficulty !== difficultyMap?.[filters?.difficulty]) return false;
    }

    if (filters?.status !== 'all') {
      if (filters?.status === 'not-started' && track?.completionPercentage > 0) return false;
      if (filters?.status === 'in-progress' && (track?.completionPercentage === 0 || track?.completionPercentage === 100)) return false;
      if (filters?.status === 'completed' && track?.completionPercentage !== 100) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
          <Breadcrumb />

          <div className="mb-6 md:mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
                  Parcours d'apprentissage
                </h1>
                <p className="text-sm md:text-base text-text-secondary">
                  Choisissez votre parcours et progressez à votre rythme dans le monde des données
                </p>
              </div>
              <Button
                variant="outline"
                iconName="Filter"
                iconPosition="left"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                Filtres
              </Button>
            </div>

            <ProgressIndicator
              currentModule="Jointures et relations"
              completionPercentage={45}
              totalModules={12}
              completedModules={5}
              variant="compact"
            />
          </div>

          <StatsOverview stats={stats} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mt-6 md:mt-8">
            <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="space-y-6">
                <FilterPanel
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={handleClearFilters}
                />
                <RecommendationCard recommendation={recommendation} />
                <BookmarkedModules
                  bookmarks={bookmarks}
                  onRemoveBookmark={handleRemoveBookmark}
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              {filteredTracks?.length === 0 ? (
                <div className="bg-card rounded-lg shadow-md p-8 md:p-12 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={32} className="text-text-secondary md:w-10 md:h-10" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-text-primary mb-2">
                    Aucun parcours trouvé
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary mb-4">
                    Essayez de modifier vos filtres pour voir plus de résultats
                  </p>
                  <Button
                    variant="outline"
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={handleClearFilters}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredTracks?.map((track) => (
                    <TrackCard
                      key={track?.id}
                      track={track}
                      onModuleClick={handleModuleClick}
                    />
                  ))}
                </div>
              )}

              <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 md:p-8 border border-primary/20">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" size={24} className="text-primary md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">
                      Besoin d'aide pour choisir ?
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary mb-4">
                      Notre assistant IA peut vous recommander le parcours idéal en fonction de vos objectifs et de votre niveau actuel.
                    </p>
                    <Button
                      variant="default"
                      iconName="MessageSquare"
                      iconPosition="left"
                    >
                      Obtenir des recommandations
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningPaths;