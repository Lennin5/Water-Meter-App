import { DefaultTheme } from "@react-navigation/native";

const DarkTheme = {
    colors: {
      ...DefaultTheme.colors,
      theme: "dark",
      //============================================================================       
  
      primary: '#37d8bd', //Color primario de la app en modo oscuro de la app
      secondary: "#111518",//Color secundario de la app en modo oscuro de la app
  
      background: "#111518", //Color del background central de la app
      text: "#ffffff", //Color del texto de la barra nativa de la app 
      textSecondary: "#B1B3B5", //Color del texto de la barra nativa de la app 
      card: "#000000", //Color del background del header y navigation de la app     
      borderBottomColor: "gray", // Color de BorderBottom del header
      border: "#B1B3B5", //BorderTop de la barra de navegación de la app       
  
      //Otros colores del DarkTheme ================================================
  
      lightGrayColor: "#4646469d", // Color GRAY LIGHT de la app en modo oscuro (sirve en la separación de AccountOptions)
      iconLightGrayColor: "#4646469d", // Color secundario de icono, es un gris más oscuro 
      icon: "#B1B3B5", // Color de iconos de la app
      input: "#adadad", // Color de inputs de formularios de la app
      barBackgroundColor: "#000000", // Background de la barra de estado
      barStyle: "light-content", // Estilo de la barra de estado
      redColor: "#b64040", // Color rojo de la app en modo oscuro      
      modalMapColor: "#0a0a0a" //Color del background del Modal Map en modo oscuro
    },
  }; 

export default DarkTheme;


 