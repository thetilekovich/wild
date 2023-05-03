import { Providers } from '@/app/provider';

export const metadata = {
  title: 'Log in '
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
