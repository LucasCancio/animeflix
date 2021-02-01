import React from "react";
import { VideoCardGroupContainer, Title } from "./styles";
import VideoCard from "./components/VideoCard";
import Slider, { SliderItem } from "./components/Slider";
import Category from "../../models/Category";

interface Props {
  ignoreFirstVideo?: boolean;
  category: Category;
  indice: number;
}

const Carousel: React.FC<Props> = ({ ignoreFirstVideo, category, indice }) => {
  console.log("indice", indice);

  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const videos = category.videos;

  console.log("videos", videos);

  return (
    <VideoCardGroupContainer key={`video-${indice}`}>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || "red" }}>
            {categoryTitle}
          </Title>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={`slider_${video.titulo}_${index}`}>
              <VideoCard
                imageURL={video.image_url}
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
};

export default Carousel;
