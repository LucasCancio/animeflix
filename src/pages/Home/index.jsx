import React, { useEffect, useState } from "react";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

import PageDefault from "../../components/PageDefault";

import categoriasRepository from "../../repositories/categoriasRepository";

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log("categoriasComVideos", categoriasComVideos);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((erro) => {
        console.error(erro);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <BannerMain
            key={"banner_0"}
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={
              "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
            }
          />

          {dadosIniciais.map((categoria, indice) => {
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
