import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
const image = {
  uri: "https://s4.aconvert.com/convert/p3r68-cdx67/aofxa-i5cb0.png",
};
const App = () => {
  const [produtos, setProdutos] = useState([
    {
      nome: "Militec - Condicionador de Metais",
      key: 1,
      descriçao:
        "é um condicionador de metais, ou seja, ele serve como uma substância protetora para superfícies metálicas em atrito.",
    },
    {
      nome: "STP Flex Treatment",
      key: 2,
      descriçao:
        "é um produto de limpeza concentrado, de alta eficácia, age rapidamente no motor, removendo depósitos causadores de perda de potência em qualquer sistema de injeção de combustível, nacional ou importado.",
    },
    {
      nome: "STP Octane Booster",
      key: 3,
      descriçao:
        "aumenta a octanagem da gasolina, evita as “batidas do motor”, limpa a câmara de combustão e proporciona economia de combustível. Pode ser utilizado em etanol para limpeza do sistema.",
    },
    {
      nome: "STP Inject Cleaner",
      key: 4,
      descriçao:
        "é um produto de limpeza concentrado, de alta eficácia, age rapidamente no motor, removendo depósitos causadores de perda de potência em qualquer sistema de injeção de combustível, nacional ou importado.",
    },
    {
      nome: "STP Intake Valve Cleaner",
      key: 5,
      descriçao:
        "Fórmula concentrada, de forte ação, ajuda a eliminar depósitos nas válvulas de admissão, evitando problemas na passagem do combustível injetado. Excelente para motores de alta performance e tecnologia.",
    },
    {
      nome: "STP Ultra 5-1",
      key: 6,
      descriçao:
        "é indicado para a limpeza total do sistema de combustível, desde o tanque reservatório até a câmara de combustão, incluindo injetores, válvulas de admissão, cilindros, pistões etc.",
    },
    {
      nome: "Paraflu - Concentrado Rosa",
      key: 7,
      descriçao:
        "O fluido possui uma formulação balanceada a base de glicóis e inibidores de corrosão orgânicos que foram desenvolvidos com a mais alta tecnologia para oferecer máxima proteção para o sistema de arrefecimento de motores endotérmicos no geral.",
    },
    {
      nome: "Óleo de Freio - DOT-4 Bosch",
      key: 8,
      descriçao:
        "O fluido de freio é um composto sintético ou semi-sintético indispensável ao processo de frenagem do veículo. Suas principais características são a capacidade de não se comprimir e a de absorver água.",
    },
    {
      nome: "Limpa Vidros - Luxcar",
      key: 9,
      descriçao:
        "O Limpa Vidros Luxcar é formulado especialmente para a limpeza de vidros e espelhos automotivos. Ele desengraxa e cria uma película protetora diminuindo o embaçamento.",
    },
    {
      nome: "Limpa Pneu - Luxcar",
      key: 10,
      descriçao:
        "Com o Limpa Pneus Pretinho Luxcar é muito mais fácil limpar, conservar e dar brilho em seus pneus além de aumentar a vida útil prevenindo o ressecamento.",
    },
  ]);

  const apertarBotao = (item) => {
    console.log(item.descriçao);
    Alert.alert(item.nome, item.descriçao);
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.image}>
          <Text style={styles.title}> FuelTech </Text>
          <FlatList
            numColumns={2}
            keyExtractor={(item) => item.nome}
            data={produtos}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => apertarBotao(item)}>
                <Text style={styles.item}>{item.nome}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#20b2aa",
    marginTop: 40,
    marginLeft: 15,
    alignContent: "center",
    textAlign: "center",
    width: 172,
    height: 120,
    padding: 20,
    borderRadius: 25,
    borderColor: "black",
    borderWidth: 2,
  },
  image: {
    flex: 1,
    width: 400,
    height: 800,
    resizeMode: "cover",
    marginTop: 47.5,
  },

  title: {
    marginTop: 2,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#20b2aa",
    marginBottom: 40,
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: 4, height: 3 },
  },
});
export default App;
