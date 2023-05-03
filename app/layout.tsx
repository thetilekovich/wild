import { Providers } from '@/app/provider';
import '../styles/globals.scss'

export const metadata = {
  title: 'Main page'
}


const RootLayout = ({ children }: { children: React.ReactNode }) => {
    
  return (
    <html lang="ru">
      <body>
        <Providers>
            {children}
        </Providers>
       </body>
     </html>
  )
}
export default RootLayout;
