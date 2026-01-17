import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TranscriptPanel = ({ 
  transcript = [],
  currentTime = 0,
  onSeek = () => {}
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);

  const defaultTranscript = [
    {
      id: 1,
      timestamp: "00:00",
      seconds: 0,
      text: "Bienvenue dans ce cours d'introduction aux bases de données SQL. Aujourd'hui, nous allons explorer les concepts fondamentaux qui vous permettront de maîtriser la gestion des données relationnelles."
    },
    {
      id: 2,
      timestamp: "00:45",
      seconds: 45,
      text: "SQL, ou Structured Query Language, est le langage standard pour interagir avec les bases de données relationnelles. Il vous permet de créer, lire, mettre à jour et supprimer des données de manière efficace."
    },
    {
      id: 3,
      timestamp: "01:30",
      seconds: 90,
      text: "Commençons par comprendre ce qu'est une base de données relationnelle. C'est essentiellement un ensemble de tables interconnectées qui stockent des informations de manière structurée."
    },
    {
      id: 4,
      timestamp: "02:15",
      seconds: 135,
      text: "Chaque table contient des lignes et des colonnes. Les colonnes définissent les types de données que vous pouvez stocker, tandis que les lignes représentent les enregistrements individuels."
    },
    {
      id: 5,
      timestamp: "03:00",
      seconds: 180,
      text: "Les clés primaires sont essentielles pour identifier de manière unique chaque enregistrement dans une table. Elles garantissent l'intégrité des données et permettent d'établir des relations entre les tables."
    },
    {
      id: 6,
      timestamp: "04:20",
      seconds: 260,
      text: "Maintenant, parlons des requêtes SELECT. C'est la commande la plus utilisée en SQL. Elle vous permet de récupérer des données spécifiques à partir d'une ou plusieurs tables."
    },
    {
      id: 7,
      timestamp: "05:45",
      seconds: 345,
      text: "La clause WHERE est votre meilleur ami pour filtrer les données. Elle vous permet de spécifier des conditions précises pour ne récupérer que les enregistrements qui vous intéressent."
    },
    {
      id: 8,
      timestamp: "07:10",
      seconds: 430,
      text: "Les jointures sont un concept puissant qui vous permet de combiner des données provenant de plusieurs tables. Il existe plusieurs types de jointures: INNER JOIN, LEFT JOIN, RIGHT JOIN et FULL JOIN."
    }
  ];

  const transcriptData = transcript?.length > 0 ? transcript : defaultTranscript;

  const filteredTranscript = transcriptData?.filter(item =>
    item?.text?.toLowerCase()?.includes(searchQuery?.toLowerCase())
  );

  const handleTranscriptClick = (seconds) => {
    onSeek(seconds);
  };

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Icon name="FileText" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-text-primary">
                Transcription
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                {filteredTranscript?.length} segments
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-text-secondary hover:text-text-primary"
          >
            <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={20} />
          </Button>
        </div>

        <div className="relative">
          <Icon 
            name="Search" 
            size={16} 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" 
          />
          <input
            type="text"
            placeholder="Rechercher dans la transcription..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-md text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
          />
        </div>
      </div>
      {isExpanded && (
        <div className="max-h-96 overflow-y-auto scrollbar-custom">
          {filteredTranscript?.length > 0 ? (
            <div className="p-4 md:p-6 space-y-4">
              {filteredTranscript?.map((item) => (
                <div
                  key={item?.id}
                  onClick={() => handleTranscriptClick(item?.seconds)}
                  className={`
                    p-4 rounded-lg cursor-pointer transition-smooth
                    ${currentTime >= item?.seconds && currentTime < (filteredTranscript?.[filteredTranscript?.indexOf(item) + 1]?.seconds || Infinity)
                      ? 'bg-primary/10 border-l-4 border-primary' :'bg-muted/30 hover:bg-muted/50'
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                      {item?.timestamp}
                    </span>
                    <p className="text-sm text-text-primary leading-relaxed flex-1">
                      {item?.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4 opacity-50" />
              <p className="text-sm text-text-secondary">
                Aucun résultat trouvé pour "{searchQuery}"
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TranscriptPanel;