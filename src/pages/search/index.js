import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import instance from '../../services/Api'

function SearchPage() {
  const [data, setData] = useState([]);
  const { search } = useParams();

  useEffect( () => {
    async function getAll() {
      const res = await instance.get(search);
      setData(res.data);
      console.log(res.data);
    }

    getAll();
  }, [search] );




  
  return (
    <>
      <br/>
      <br/>
      <a href='/'>VOLTAR PARA A HOME</a>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>JSON Placeholder</h1>
      <br/>
      <br/>

      <a href='https://jsonplaceholder.typicode.com/'>Link para a API</a>
      <br/>
      <br/>
      <h3>Resultado da busca:</h3>
      <br/>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Título:</strong> {data.title}</p>
      <br/>
      <h3>Imagens</h3>
      <br/>
      <h4>Normal</h4>
      <img src='https://via.placeholder.com/600/324309' alt='Imagem de tamanho normal'/>
      <h4>Thumbnail</h4>
      <img src='https://via.placeholder.com/150/324309' alt='Imagem de tamanho reduzido'/>
    </>
  );
}

export default SearchPage;