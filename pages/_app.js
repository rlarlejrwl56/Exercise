import '../styles/globals.css'
import TopBar from "../components/common/TopBar";
import wrapper, {persistor, store} from "../store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Footer from '../components/common/Footer';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter();
    useEffect(() => prePage, [router.asPath]);

    const prePage = () => {
        const storage = globalThis?.sessionStorage;
        if(!storage) return;
        const prePath = storage.getItem('currentPath');
        storage.setItem("prevPath", prePath || '/');
        storage.setItem("currentPath", globalThis.location.pathname);
    }
  return (
              <SessionProvider session = {session}
              refetchInterval={1*10}
              >
            <TopBar/>
                <Component {...pageProps} />
            <Footer/>
              </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp);