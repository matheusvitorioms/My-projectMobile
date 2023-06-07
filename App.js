import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, FlatList,ImageBackground,image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carrinho from "./components/src/Carrinho";
import { useNavigation } from '@react-navigation/native';

const Produtos = () => {
  
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([

{
      nome: "Militec - Condicionador de Metais",
      key: 1,
      descricao:
        "é um condicionador de metais, ou seja, ele serve como uma substância protetora para superfícies metálicas em atrito.",
    },
    
    {
      nome: "STP Flex Treatment",
      key: 2,
      descricao:
        "é um produto de limpeza concentrado, de alta eficácia, age rapidamente no motor, removendo depósitos causadores de perda de potência em qualquer sistema de injeção de combustível, nacional ou importado.",
    },
    
    {
      nome: "STP Octane Booster",
      key: 3,
      descricao:
        "aumenta a octanagem da gasolina, evita as “batidas do motor”, limpa a câmara de combustão e proporciona economia de combustível. Pode ser utilizado em etanol para limpeza do sistema.",
    },
    
    {
      nome: "STP Inject Cleaner",
      key: 4,
      descricao:
        "é um produto de limpeza concentrado, de alta eficácia, age rapidamente no motor, removendo depósitos causadores de perda de potência em qualquer sistema de injeção de combustível, nacional ou importado.",
    },
    
    {
      nome: "STP Intake Valve Cleaner",
      key: 5,
      descricao:
        "Fórmula concentrada, de forte ação, ajuda a eliminar depósitos nas válvulas de admissão, evitando problemas na passagem do combustível injetado. Excelente para motores de alta performance e tecnologia.",
    },
    
    {
      nome: "STP Ultra 5-1",
      key: 6,
      descricao:
        "é indicado para a limpeza total do sistema de combustível, desde o tanque reservatório até a câmara de combustão, incluindo injetores, válvulas de admissão, cilindros, pistões etc.",
    },
    
    {
      nome: "Paraflu - Concentrado Rosa",
      key: 7,
      descricao:
        "O fluido possui uma formulação balanceada a base de glicóis e inibidores de corrosão orgânicos que foram desenvolvidos com a mais alta tecnologia para oferecer máxima proteção para o sistema de arrefecimento de motores endotérmicos no geral.",
    },
    
    {
      nome: "Óleo de Freio - DOT-4 Bosch",
      key: 8,
      descricao:
        "O fluido de freio é um composto sintético ou semi-sintético indispensável ao processo de frenagem do veículo. Suas principais características são a capacidade de não se comprimir e a de absorver água.",
    },
    
    {
      nome: "Limpa Vidros - Luxcar",
      key: 9,
      descricao:
        "O Limpa Vidros Luxcar é formulado especialmente para a limpeza de vidros e espelhos automotivos. Ele desengraxa e cria uma película protetora diminuindo o embaçamento.",
    },
    
    {
      nome: "Limpa Pneu - Luxcar",
      key: 10,
      descricao:
        "Com o Limpa Pneus Pretinho Luxcar é muito mais fácil limpar, conservar e dar brilho em seus pneus além de aumentar a vida útil prevenindo o ressecamento.",
    },
  ]);

  const apertarBotao = (boxItem) => {
  console.log(boxItem.descricao);
  Alert.alert(
    boxItem.nome,
    boxItem.descricao,
    [
      {
        text: "Ver mais ou Adicionar",
        onPress: () => navigation.navigate('Carrinho'), // Navega para a tela 3
      },
      { text: "Voltar", onPress: () => console.log("Botão Cancelar pressionado") }
    ]
  );
};

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.boxtitulo}>
          <Text style={styles.title}>Lista de Produtos</Text>
        </View>

        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.nome}
          data={produtos}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => apertarBotao(item)}>
              <View style={styles.boxItem}>
                <Text style={styles.itemText}>{item.nome}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

const imagem = {
  uri: "https://images.hdqwalls.com/download/golden-gasoline-desert-gas-station-xn-1080x1920.jpg",
};
const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {
  const onPressAcessar = () => {
    // Ao clicar em Acessar faz algo
    Alert.alert('Bem Vindo!', `${email},${senha}`);
    navigation.navigate('Produtos');
  };

  const onPressEsqueceuASenha = () => {
    // Ao clicar em Esqueceu a senha faz algo
  };

  const onPressCadastrar = () => {
    // faz algo ao clicar para se cadastrar
  };

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
   <View style={styles.container}>
      <ImageBackground
        source={imagem}
        resizeMode="cover"
        style={styles.imagem}
      ></ImageBackground>
      <Text style={styles.titles}> FuelTech </Text>

      <View style={styles.inputView}>
        <MaterialCommunityIcons name="fuel" size={26} color="#20b2aa" />
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <MaterialIcons name="local-gas-station" size={26} color="#20b2aa" />
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Senha"
          placeholderTextColor="#003f5c"
          keyboardType="numeric"
          onChangeText={(text) => setSenha(text)}
        />
      </View>

      <TouchableOpacity onPress={onPressEsqueceuASenha}>
        <Text style={styles.forgotAndSignUpText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressAcessar} style={styles.loginButton}>
        <Text style={styles.loginText}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressCadastrar}>
        <Text style={styles.forgotAndSignUpText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {

    backgroundColor: '20b2aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView: {
width: "80%",
    fontWeight: "bold",
    backgroundColor: "white",
    borderColor: "black",
    height: 68,
    marginBottom: 20,
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    alignContent: "flex-start",
    borderRadius: 25,
    borderWidth: 2,
  },
  inputText: {
height:50,
color:"black",
  },
  forgotAndSignUpText: {
    fontSize: 13,
    color:"black",
    fontWeight: "bold",
  },
  loginButton: {
width: "80%",
    backgroundColor: "#20b2aa",
    borderColor: "black",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    borderRadius: 25,
    borderWidth: 2,
  },
  loginText: {
    fontWeight: "bold",
    color: 'black',
    fontSize: 16,
  },

  title: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#20B2AA",
    textShadowRadius: 1,
    textShadowOffset: { width: 4, height: 3 },
  },
  titles: {
    marginTop: 160,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "#20B2AA",
    textShadowRadius: 1,
    textShadowOffset: { width: 4, height: 3 },
  },
  boxItem: {
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#20b2aa",
    borderColor: "black",
    marginTop: 30,
    marginHorizontal: 5,
    width: 180,
    height: 150,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    
  },

  imagem: {
    flex: 1,
    width: 400,
    height: 800,
    resizeMode: "cover",
  },
});

export default App;
