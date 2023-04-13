import React, { useState } from 'react';
import './homeVideo.css';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import vid from '../../../assets/Branding.mp4';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import CloseIcon from '@mui/icons-material/Close';

const HomeVideo = () => {
  const [runVideo, setIsRunVideo] = useState(false);
  return (
    <div className="home-video">
      <MdOutlineSlowMotionVideo
        className="video-icon"
        onClick={() => setIsRunVideo(true)}
      />
      <h2>Why You Need Me</h2>
      <h5>VIDEO PRESENTATION</h5>
      <CloseIcon
        className={`close-video ${runVideo ? 'show-video-close-icon' : ''}`}
        onClick={() => setIsRunVideo(false)}
      />
      {runVideo ? (
        <Video className={`video ${runVideo ? 'run' : ''}`}>
          <source src={vid}></source>
        </Video>
      ) : (
        ''
      )}
    </div>
  );
};

export default HomeVideo;
