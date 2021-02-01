import React from "react";
import VideoIframeResponsive from "./components/VideoIframeResponsive";
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from "./styles";

interface BannerMainProps {
  videoTitle: string;
  url: string;
  image_url: string;
}

const BannerMain: React.FC<BannerMainProps> = ({
  videoTitle,
  url,
  image_url,
}) => {
  return (
    <BannerMainContainer backgroundImage={image_url}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive />
          <WatchButton>Assistir</WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
};

export default BannerMain;
