import '../styles/globals.css'
import TopBar from "../components/common/TopBar";
import wrapper, {persistor, store} from "../store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
              <SessionProvider session = {session} >
            <TopBar/>
            <Component {...pageProps} />
              </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);