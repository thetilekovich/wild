import { Providers } from '@/app/provider';
import '../styles/globals.scss'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Main page'
}


const RootLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="ru">
      <body className='bg-mobile-body py-2 text-white md:text-black md:bg-white'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout;
