import Layout from "@/components/layouts/layout";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function App({ Component, pageProps }) {
  // if (Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps} />);
  // } else {

  const contextValue = 'Example value';
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        body {
          font-family: ${poppins.style.fontFamily};
          font-weight: 400;
        }
        
      `}</style>
          <Layout>
            <Component {...pageProps} />
          </Layout>
    </>
  );
  // }
}


