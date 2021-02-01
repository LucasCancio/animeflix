import React from "react";
import { VideoCardContainer } from "./styles";

interface VideoCardProps {
  videoTitle: string;
  videoURL: string;
  categoryColor: string;
  imageURL: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoTitle,
  videoURL,
  categoryColor,
  imageURL,
}) => {
  return (
    <VideoCardContainer
      url={imageURL}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || "red" }}
      title={videoTitle}
    />
  );
};

export default VideoCard;
