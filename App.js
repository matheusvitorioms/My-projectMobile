import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, FlatList,ImageBackground,image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carrinho from "./components/Carrinho";
import { useNavigation } from '@react-navigation/native';

const imagem = {
  uri: "data:image/jpeg;base64,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",
};
const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {
  const onPressAcessar = () => {
    // Ao clicar em Acessar faz algo
    Alert.alert('Bem Vindo ao RoyalGas!', `${email},${senha}`);
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
      <Text style={styles.titles}> RoyalGas </Text>

      <View style={styles.inputView}>
        <MaterialCommunityIcons name="fuel" size={26} color="red" />
        <TextInput
          style={styles.inputText}
          placeholder="E-mail"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <MaterialIcons name="local-gas-station" size={26} color="red" />
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

const Produtos = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([
{
      nome: "Gasolina Comum",
      key: 1,
      descriçao:
        "A gasolina é um combustível constituído basicamente por hidrocarbonetos (compostos químicos constituídos apenas por átomos de carbono e hidrogênio) e, em menor quantidade, por produtos oxigenados.",
    },
    {
      nome: "Gasolina Aditivada",
      key: 2,
      descriçao:
        "A gasolina aditivada, como o próprio nome já diz, possui aditivos, dispersantes e detergentes que impedem a formação de depósitos carboníferos dentro do motor. ",
    },
    {
      nome: "Gasolina Podium",
      key: 3,
      descriçao:
        "É a gasolina mais avançada, de maior octanagem comercializada mundialmente (IAD=97*). É menos poluente, apresentando teor de enxofre de 30 ppm. Sua coloração é levemente alaranjada devido ao corante adicionado ao etanol anidro.",
    },
    {
      nome: "Diesel Comum",
      key: 4,
      descriçao:
        "O diesel comum ou S-500 é um dos mais utilizados no Brasil, principalmente devido ao custo, que costuma ser bem menor quando comparado a outros. Contudo, isso não quer dizer que ele seja a opção ideal em todos os casos, uma vez que traz alguns problemas.",
    },
    {
      nome: "Diesel S-10",
      key: 5,
      descriçao:
        "Para veículos construídos após 2012 ou para quem quer um desempenho melhor, é indicado o diesel S-10. Por ter menor concentração de enxofre em sua composição, ele deixa menos resíduos no motor, o que aumenta a sua vida útil. Além disso, seu índice cetano é 48, o que garante melhora na performance e na partida.",
    },
    {
      nome: "Diesel S500",
      key: 6,
      descriçao:
        " é um combustível mais simples que o S10, possui uma coloração avermelhada e nenhuma adição de aditivo em sua composição original. Seu nome “s500” diz respeito à quantidade de partículas de enxofre emitidas por milhão desse combustível.",
    },
    {
      nome: "Etanol",
      key: 7,
      descriçao:
        "é um biocombustível obtido da cana-de-açúcar. O etanol é um composto orgânico pertencente à função química álcool e é popularmente conhecido como álcool etílico. Apresenta-se como um líquido incolor e é altamente inflamável.",
    },
    {
      nome: "Etanol Aditivado",
      key: 8,
      descriçao:
        "é um tipo de combustível que segue a mesma ideia da gasolina aditivada. Trata-se de um combustível com detergentes e dispersantes que lubrificam as partes internas do motor, removendo, inclusive, os resíduos acumulados no bico injetor.",
    },
    {
      nome: "Arla 32",
      key: 9,
      descriçao:
        "é um fluído automotivo que atua nos sistemas de exaustão como agente redutor de até 98% das emissões de óxidos de nitrogênio (NOx), transformando-os em vapor d'água e nitrogênio.",
    },
    {
      nome: "Gás Natural Veicular",
      key: 10,
      descriçao:
        "é um combustível disponibilizado na forma gasosa. Diferencia-se do gás liquefeito de petróleo (GLP) por ser constituído por hidrocarbonetos na faixa do metano e do etano, enquanto o GLP possui em sua formação hidrocarbonetos na faixa do propano e do butano.",
    },
  ]);

  const apertarBotao = (boxItem) => {
  console.log(boxItem.descricao);
  Alert.alert(
    boxItem.nome,
    boxItem.descricao,
    [
      {
        text: "Adicionar no Carrinho",
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

    backgroundColor: 'red',
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
    backgroundColor: "red",
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
    color: "red",
    textShadowRadius: 1,
    textShadowOffset: { width: 4, height: 3 },
  },
  titles: {
    marginTop: 160,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 50,
    color: "red",
    textShadowRadius: 1,
    textShadowOffset: { width: 4, height: 3 },
  },
  boxItem: {
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "red",
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
