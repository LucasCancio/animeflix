import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

import useForm from "../../../hooks/useForm";
import categoriasRepository from "../../../repositories/categoriasRepository";



function CadastroCategoria() {
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "",
  };

  const [categorias, setCategorias] = useState([]);

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    categoriasRepository.getAll().then((categorias) => {
      setCategorias(categorias);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria:</h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);

          clearForm(valoresIniciais);
        }}
      >
        <div>
          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
        </div>
        <div>
          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return <li key={`${categoria}${indice}`}>{categoria.titulo}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
