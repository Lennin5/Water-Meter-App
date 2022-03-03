import { DefaultTheme } from "@react-navigation/native";

const LightTheme = {
    colors: {
      ...DefaultTheme.colors,
      theme: "light",
      //============================================================================ 

      primary: "#47cab4", //Color primario de la app en modo normal de la app
      secondary: "#f2f2f2", //Color secundario de la app en modo normal de la app

      background: "#f2f2f2", //Color del background central de la app
      text: "#000000", //Color del texto de la barra nativa de la app 
      textSecondary: "#464646", //Color del texto de la barra nativa de la app 
      card: "#ffffff", //Color del background de la parte inferior y superior de la app
      borderBottomColor: "transparent", // Color de BorderBottom del header
      border: "#B1B3B5", //BorderTop de la barra de navegación de la app

      //Otros colores del DarkTheme ================================================

      lightGrayColor: "#bdbdbd73", // Color GRAY LIGHT de la app en modo normal (sirve en la separación de AccountOptions)
      iconLightGrayColor: "#e3e3e3", // Color secundario de icono, es un gris más oscuro
      icon: "#7a7a7a", // Color de iconos de la app
      input: "#9e9e9e", // Color de inputs de formularios de la app
      barBackgroundColor: "#ffffff", // Background de la barra de estado
      barStyle: "dark-content", // Estilo de la barra de estado
      redColor: "#d60000", // Color rojo de la app en modo normal      
      modalMapColor: "#f8f9fb" //Color del background del Modal Map en modo normal
    }
  };

export default LightTheme;
