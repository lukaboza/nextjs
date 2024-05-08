import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

// deixamos a classe fora da função pois o css é estatico, não precisa renderizar toda hora.
globalStyles();

// _app é onde a página se renderiza, ou seja, será renderizado toda hora para cada pagina.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
