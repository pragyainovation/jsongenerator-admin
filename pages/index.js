// import localFont from 'next/font/local';
import { authHomePageHandler } from '@/utils/authHandler';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export default function Home() {
  return <>loading...</>;
}

export const getServerSideProps = async (context) => {
  return await authHomePageHandler(context);
};