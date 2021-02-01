import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

import PageDefault from "../../components/PageDefault";
import Category from "../../models/Category";
import animeService from "../../services/animeService";
import { convertAnimeToVideo } from "../../services/convert";

function Home() {
  const [categorias, setCategorias] = useState<Category[]>([]);

  useEffect(() => {
    animeService
      .getTop50Animes(1)
      .then((data) => {
        return data.top.map((anime) => convertAnimeToVideo(anime));
      })
      .then((videos) => {
        const topCategory: Category = {
          cor: "",
          titulo: "Top animes",
          videos,
        };
        console.log("topCategory", topCategory);
        setCategorias([topCategory]);
      });
    /* categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log("categoriasComVideos", categoriasComVideos);
        setCategorias(categoriasComVideos);
      })
      .catch((erro) => {
        console.error(erro);
      }); */
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {categorias.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <BannerMain
            image_url={categorias[0].videos[0].image_url}
            key={"banner_0"}
            videoTitle={categorias[0].videos[0].titulo}
            url={categorias[0].videos[0].url}
          />

          {categorias.map((categoria, indice) => {
            console.log("carousel_${indice}", `carousel_${indice}`);

            return !indice ? (
              <Carousel indice={indice} ignoreFirstVideo category={categoria} />
            ) : (
              <Carousel indice={indice} category={categoria} />
            );
          })}
        </>
      )}
    </PageDefault>
  );
}

export default Home;
