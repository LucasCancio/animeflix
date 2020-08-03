import React from "react";
import { VideoCardGroupContainer, Title, ExtraLink } from "./styles";
import VideoCard from "./components/VideoCard";
import Slider, { SliderItem } from "./components/Slider";

import PropTypes from "prop-types";

function Carousel({ ignoreFirstVideo, category, indice }) {
  console.log("indice", indice);

  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;

  console.log("videos", videos);
  
  return (
    <VideoCardGroupContainer key={`video-${indice}`}>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || "red" }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
          )}
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
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
  indice: 0,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.object.isRequired,
  indice: PropTypes.number,
};

export default Carousel;
