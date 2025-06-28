import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Esan verhoilu</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/icon.png" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <script>var dID="7dd12699-12bd-4bd6-8e84-e6801c1ad199"</script>
      <script defer src="https://cdn.jsdelivr.net/gh/NikoJunttila/userAnalytics@main/javascript/tracker.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;