import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotesPanel = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      timestamp: "02:15",
      seconds: 135,
      content: "Les tables contiennent des lignes et des colonnes - concept fondamental à retenir",
      createdAt: "2026-01-17 10:30"
    },
    {
      id: 2,
      timestamp: "04:20",
      seconds: 260,
      content: "SELECT est la commande la plus utilisée en SQL pour récupérer des données",
      createdAt: "2026-01-17 10:35"
    },
    {
      id: 3,
      timestamp: "07:10",
      seconds: 430,
      content: "Types de jointures: INNER, LEFT, RIGHT, FULL - à pratiquer dans le playground",
      createdAt: "2026-01-17 10:42"
    }
  ]);
  const [newNote, setNewNote] = useState('');
  const [currentTimestamp, setCurrentTimestamp] = useState('08:30');
  const [isExpanded, setIsExpanded] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');

  const handleAddNote = () => {
    if (newNote?.trim()) {
      const note = {
        id: Date.now(),
        timestamp: currentTimestamp,
        seconds: 510,
        content: newNote?.trim(),
        createdAt: new Date()?.toLocaleString('fr-FR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setNotes([...notes, note]);
      setNewNote('');
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes?.filter(note => note?.id !== id));
  };

  const handleEditNote = (note) => {
    setEditingId(note?.id);
    setEditContent(note?.content);
  };

  const handleSaveEdit = (id) => {
    setNotes(notes?.map(note => 
      note?.id === id ? { ...note, content: editContent } : note
    ));
    setEditingId(null);
    setEditContent('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditContent('');
  };

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center">
              <Icon name="StickyNote" size={20} className="text-warning" />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-text-primary">
                Mes Notes
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                {notes?.length} note{notes?.length !== 1 ? 's' : ''}
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

        <div className="space-y-3">
          <textarea
            placeholder="Ajouter une note à ce moment de la vidéo..."
            value={newNote}
            onChange={(e) => setNewNote(e?.target?.value)}
            className="w-full px-4 py-3 bg-background border border-border rounded-md text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
            rows={3}
          />
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Icon name="Clock" size={14} />
              <span>Timestamp: {currentTimestamp}</span>
            </div>
            <Button
              variant="default"
              size="sm"
              onClick={handleAddNote}
              disabled={!newNote?.trim()}
              iconName="Plus"
              iconPosition="left"
            >
              Ajouter
            </Button>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="max-h-96 overflow-y-auto scrollbar-custom">
          {notes?.length > 0 ? (
            <div className="p-4 md:p-6 space-y-4">
              {notes?.map((note) => (
                <div
                  key={note?.id}
                  className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-smooth"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-medium text-warning bg-warning/10 px-2 py-1 rounded whitespace-nowrap">
                      {note?.timestamp}
                    </span>
                    <div className="flex items-center gap-1">
                      {editingId === note?.id ? (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleSaveEdit(note?.id)}
                            className="text-accent hover:text-accent h-8 w-8"
                          >
                            <Icon name="Check" size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleCancelEdit}
                            className="text-text-secondary hover:text-text-primary h-8 w-8"
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditNote(note)}
                            className="text-text-secondary hover:text-primary h-8 w-8"
                          >
                            <Icon name="Edit2" size={16} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteNote(note?.id)}
                            className="text-text-secondary hover:text-destructive h-8 w-8"
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                  {editingId === note?.id ? (
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e?.target?.value)}
                      className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                      rows={3}
                    />
                  ) : (
                    <p className="text-sm text-text-primary leading-relaxed mb-2">
                      {note?.content}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <Icon name="Calendar" size={12} />
                    <span>{note?.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <Icon name="StickyNote" size={48} className="text-text-secondary mx-auto mb-4 opacity-50" />
              <p className="text-sm text-text-secondary mb-2">
                Aucune note pour le moment
              </p>
              <p className="text-xs text-text-secondary">
                Ajoutez des notes pour mémoriser les concepts importants
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotesPanel;