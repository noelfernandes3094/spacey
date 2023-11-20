import { Oswald, Zen_Dots } from 'next/font/google'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})


import { getServerSession } from 'next-auth'; 
import { Suspense } from 'react'

//Components
import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';
import SessionProvider from "./components/session-provider/SessionProvider";
import { CapsuleProvider } from './context/capsule.context.component';
import Loading from './loading';

export const metadata = {
  title: 'SpaceX Experimental',
  description: 'Experimental Site',
}

export default async function RootLayout({ children }) {

  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={ oswald.className } suppressHydrationWarning={true}>
        <SessionProvider session={ session }>
            <Navigation />
              <Suspense fallback={ <Loading /> }>
                <CapsuleProvider>
                {children}
                </CapsuleProvider>
              </Suspense>
            <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
