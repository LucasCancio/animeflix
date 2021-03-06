import React from "react";

import { VideoContainer, ResponsiveIframe } from "./styles";

function YouTubeIframeResponsive() {
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default YouTubeIframeResponsive;
