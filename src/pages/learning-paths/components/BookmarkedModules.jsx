import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BookmarkedModules = ({ bookmarks, onRemoveBookmark }) => {
  if (bookmarks?.length === 0) {
    return (
      <div className="bg-card rounded-lg shadow-md p-6 md:p-8 text-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
          <Icon name="Bookmark" size={32} className="text-text-secondary md:w-10 md:h-10" />
        </div>
        <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">
          Aucun module favori
        </h3>
        <p className="text-sm text-text-secondary">
          Ajoutez des modules à vos favoris pour y accéder rapidement
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Bookmark" size={20} className="text-primary" />
            <h3 className="text-base md:text-lg font-semibold text-text-primary">
              Modules favoris
            </h3>
          </div>
          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
            {bookmarks?.length}
          </span>
        </div>
      </div>
      <div className="divide-y divide-border">
        {bookmarks?.map((bookmark) => (
          <div
            key={bookmark?.id}
            className="p-3 md:p-4 hover:bg-muted/30 transition-smooth"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon name="BookOpen" size={16} className="text-primary md:w-5 md:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm md:text-base font-semibold text-text-primary mb-1 line-clamp-1">
                  {bookmark?.title}
                </h4>
                <p className="text-xs md:text-sm text-text-secondary line-clamp-1 mb-2">
                  {bookmark?.track}
                </p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    <span>{bookmark?.duration}</span>
                  </div>
                  {bookmark?.progress > 0 && (
                    <div className="flex items-center gap-1 text-primary">
                      <Icon name="TrendingUp" size={12} />
                      <span>{bookmark?.progress}%</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  iconName="BookmarkMinus"
                  onClick={() => onRemoveBookmark(bookmark?.id)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  iconName="ExternalLink"
                  asChild
                >
                  <Link to="/course-content" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkedModules;