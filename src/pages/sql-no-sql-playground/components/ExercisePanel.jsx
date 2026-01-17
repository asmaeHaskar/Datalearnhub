import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExercisePanel = ({ selectedDb, onLoadExercise }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showHints, setShowHints] = useState(false);

  const exercises = {
    mysql: [
      {
        id: 1,
        title: "Sélection Simple",
        difficulty: "Débutant",
        description: "Récupérez tous les utilisateurs de la table users",
        hints: [
          "Utilisez la commande SELECT",
          "Spécifiez * pour toutes les colonnes",
          "N\'oubliez pas FROM users"
        ],
        solution: "SELECT * FROM users;",
        points: 10
      },
      {
        id: 2,
        title: "Filtrage avec WHERE",
        difficulty: "Débutant",
        description: "Trouvez tous les utilisateurs créés après le 1er janvier 2024",
        hints: [
          "Utilisez WHERE avec created_at",
          "Format de date: \'YYYY-MM-DD'",
          "Opérateur de comparaison: >"
        ],
        solution: "SELECT * FROM users WHERE created_at > '2024-01-01';",
        points: 15
      },
      {
        id: 3,
        title: "Jointure de Tables",
        difficulty: "Intermédiaire",
        description: "Récupérez tous les utilisateurs avec leurs commandes",
        hints: [
          "Utilisez INNER JOIN",
          "Liez users.id avec orders.user_id",
          "Sélectionnez les colonnes pertinentes"
        ],
        solution: "SELECT users.username, orders.total, orders.status\nFROM users\nINNER JOIN orders ON users.id = orders.user_id;",
        points: 25
      }
    ],
    postgresql: [
      {
        id: 1,
        title: "Agrégation de Données",
        difficulty: "Intermédiaire",
        description: "Calculez le montant total des transactions par client",
        hints: [
          "Utilisez GROUP BY avec customer_id",
          "Fonction d'agrégation: SUM()",
          "Incluez le nom du client"
        ],
        solution: "SELECT customers.name, SUM(transactions.amount) as total\nFROM customers\nJOIN transactions ON customers.id = transactions.customer_id\nGROUP BY customers.id, customers.name;",
        points: 30
      }
    ],
    mongodb: [
      {
        id: 1,
        title: "Requête de Base",
        difficulty: "Débutant",
        description: "Trouvez tous les utilisateurs avec le tag 'developer'",
        hints: [
          "Utilisez db.users.find()",
          "Recherchez dans le tableau tags",
          "Opérateur: $in ou $elemMatch"
        ],
        solution: "db.users.find({ tags: 'developer' })",
        points: 15
      },
      {
        id: 2,
        title: "Projection de Champs",
        difficulty: "Débutant",
        description: "Récupérez uniquement le username et l\'email des utilisateurs",
        hints: [
          "Utilisez le deuxième paramètre de find()",
          "Spécifiez les champs à inclure",
          "Excluez _id si nécessaire"
        ],
        solution: "db.users.find({}, { username: 1, email: 1, _id: 0 })",
        points: 20
      }
    ],
    redis: [
      {
        id: 1,
        title: "Opérations de Base",
        difficulty: "Débutant",
        description: "Définissez une clé \'user:1000\' avec la valeur \'John Doe'",
        hints: [
          "Utilisez la commande SET",
          "Format: SET key value",
          "Les guillemets sont optionnels pour les valeurs simples"
        ],
        solution: "SET user:1000 \'John Doe'",
        points: 10
      }
    ]
  };

  const currentExercises = exercises?.[selectedDb] || [];

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
    setShowHints(false);
    onLoadExercise(exercise);
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Débutant': return 'bg-accent/20 text-accent';
      case 'Intermédiaire': return 'bg-warning/20 text-warning';
      case 'Avancé': return 'bg-destructive/20 text-destructive';
      default: return 'bg-muted text-text-secondary';
    }
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden h-full flex flex-col">
      <div className="px-4 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Icon name="BookOpen" size={18} className="text-primary" />
          <span className="text-sm font-medium text-text-primary">Exercices Guidés</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-custom p-4 space-y-3">
        {currentExercises?.map((exercise) => (
          <div 
            key={exercise?.id}
            className={`
              border rounded-lg overflow-hidden transition-smooth cursor-pointer
              ${selectedExercise?.id === exercise?.id 
                ? 'border-primary shadow-primary-glow' 
                : 'border-border hover:border-primary/50'
              }
            `}
            onClick={() => handleSelectExercise(exercise)}
          >
            <div className="p-3 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-semibold text-text-primary">{exercise?.title}</h4>
                <span className={`text-xs px-2 py-1 rounded-full font-medium whitespace-nowrap ${getDifficultyColor(exercise?.difficulty)}`}>
                  {exercise?.difficulty}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {exercise?.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1 text-xs text-accent">
                  <Icon name="Award" size={12} />
                  <span>+{exercise?.points} XP</span>
                </div>
                {selectedExercise?.id === exercise?.id && (
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={(e) => {
                      e?.stopPropagation();
                      setShowHints(!showHints);
                    }}
                    iconName={showHints ? "EyeOff" : "Eye"}
                    iconPosition="left"
                  >
                    {showHints ? 'Masquer' : 'Indices'}
                  </Button>
                )}
              </div>
            </div>

            {selectedExercise?.id === exercise?.id && showHints && (
              <div className="px-3 pb-3 space-y-2">
                <div className="text-xs font-medium text-text-primary flex items-center gap-1">
                  <Icon name="Lightbulb" size={12} className="text-warning" />
                  <span>Indices:</span>
                </div>
                {exercise?.hints?.map((hint, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="text-primary font-medium">{index + 1}.</span>
                    <span>{hint}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {currentExercises?.length === 0 && (
          <div className="text-center py-8">
            <Icon name="BookOpen" size={32} className="text-text-secondary mx-auto mb-2" />
            <p className="text-sm text-text-secondary">Aucun exercice disponible pour cette base de données</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExercisePanel;