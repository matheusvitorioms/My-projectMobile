import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cabecalho from './src/Componentes/Cabecalho';
import AdicionarItem from './src/Componentes/AdicionarItem';
import ItensListados from './src/Componentes/ItensListados';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App(){
  const [lista, setLista] = useState();

const deletarItem =(key) =>{
  Axios.delete(`http://192.168.86.159:3001/item/${key}`,
  )
} 

  useEffect(() => {
    Axios.get('http://192.168.86.159:3001/itens')
      .then((response) => {
        setLista(response.data);
      })
  }, [lista]);

// CREATE
  const submeterInformacao = (texto) => {
    Axios.post('http://192.168.86.159:3001/item', { item: texto })
      .then(() => {
        setLista((prevLista) => [
          ...prevLista,
          { texto: texto, key: Math.random().toString() },
        ]);
      })
  };

  return (
    <View style={styles.container}>
      <Cabecalho />
      <View style={styles.conteudo}>
        <AdicionarItem funcao={submeterInformacao} />
        <View style={styles.estiloLista}>
          <FlatList
            data={lista}
            renderItem={({ item }) => (
              <ItensListados props={item} funcao={deletarItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conteudo: {
    flex: 1,
    padding: 20,
  },
  estiloLista: {
    marginTop: 20,
  },
});

