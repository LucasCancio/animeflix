import React, { useEffect, useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import FormField from "../../../components/FormField";
import useForm from "../../../hooks/useForm";
import Button from "../../../components/Button";

import videosRepository from "../../../repositories/videosRepository";
import categoriasRepository from "../../../repositories/categoriasRepository";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: "Video padrão",
    url: "https://www.youtube.com/watch?v=jOAU81jdi-c",
    categoria: "Front End",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categorias) => {
      setCategorias(categorias);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;
          });

          videosRepository
            .create({
              titulo: values.titulo,
              url: values.url,
              categoriaId: categoriaEscolhida.id,
            })
            .then(() => {
              console.log("Cadastrou com sucesso!");
              history.push("/");
            });
        }}
      >
        <FormField
          label="Titulo do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.url}
          suggestions={categoryTitles}
          onChange={handleChange}
        />

        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
