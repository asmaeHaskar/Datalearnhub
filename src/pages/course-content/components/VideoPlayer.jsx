import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VideoPlayer = ({ 
  videoUrl = "https://www.youtube.com/embed/HXV3zeQKqGY",
  title = "Introduction aux Bases de Données SQL",
  duration = "",
  onProgress = () => {}
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef(null);

  const totalSeconds = 942; // 15:42 in seconds


  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = Math.min(prev + 1, totalSeconds);
          onProgress((newTime / totalSeconds) * 100);
          if (newTime >= totalSeconds) {
            setIsPlaying(false);
          }
          return newTime;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, totalSeconds, onProgress]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs?.toString()?.padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const rect = e?.currentTarget?.getBoundingClientRect();
    const pos = (e?.clientX - rect?.left) / rect?.width;
    const newTime = pos * totalSeconds;
    setCurrentTime(newTime);
    onProgress((newTime / totalSeconds) * 100);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e?.target?.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef?.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const skipTime = (seconds) => {
    setCurrentTime(prev => Math.max(0, Math.min(prev + seconds, totalSeconds)));
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg">
      <div 
        ref={videoContainerRef}
        className="relative bg-background aspect-video"
      >
        <iframe
          src={videoUrl}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-4 md:p-6">
          <div 
            className="w-full h-1 bg-muted rounded-full cursor-pointer mb-4 group"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-primary rounded-full relative transition-smooth"
              style={{ width: `${(currentTime / totalSeconds) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={handlePlayPause}
                className="text-text-primary hover:text-primary"
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={20} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => skipTime(-10)}
                className="text-text-primary hover:text-primary hidden sm:flex"
              >
                <Icon name="RotateCcw" size={18} />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => skipTime(10)}
                className="text-text-primary hover:text-primary hidden sm:flex"
              >
                <Icon name="RotateCw" size={18} />
              </Button>

              <div className="flex items-center gap-2 ml-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMute}
                  className="text-text-primary hover:text-primary"
                >
                  <Icon 
                    name={isMuted || volume === 0 ? "VolumeX" : volume < 50 ? "Volume1" : "Volume2"} 
                    size={18} 
                  />
                </Button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 md:w-20 h-1 bg-muted rounded-full appearance-none cursor-pointer hidden md:block"
                  style={{
                    background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${isMuted ? 0 : volume}%, var(--color-muted) ${isMuted ? 0 : volume}%, var(--color-muted) 100%)`
                  }}
                />
              </div>

              <span className="text-xs md:text-sm text-text-secondary font-medium ml-2">
                {formatTime(currentTime)} / {duration}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                  className="text-text-primary hover:text-primary"
                >
                  <span className="text-xs font-medium">{playbackSpeed}x</span>
                </Button>

                {showSpeedMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-1010"
                      onClick={() => setShowSpeedMenu(false)}
                    />
                    <div className="absolute bottom-full right-0 mb-2 bg-popover rounded-lg shadow-lg overflow-hidden z-1020 min-w-[100px]">
                      {[0.5, 0.75, 1, 1.25, 1.5, 2]?.map(speed => (
                        <button
                          key={speed}
                          onClick={() => handleSpeedChange(speed)}
                          className={`
                            w-full px-4 py-2 text-sm text-left transition-smooth
                            ${playbackSpeed === speed 
                              ? 'bg-primary text-primary-foreground' 
                              : 'text-popover-foreground hover:bg-muted'
                            }
                          `}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleFullscreen}
                className="text-text-primary hover:text-primary"
              >
                <Icon name={isFullscreen ? "Minimize" : "Maximize"} size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 border-t border-border">
        <h3 className="text-base md:text-lg font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <div className="flex items-center gap-4 text-xs md:text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={14} />
            <span>Durée: {duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Eye" size={14} />
            <span>1,234 vues</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Calendar" size={14} />
            <span>Publié le 15 Jan 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;