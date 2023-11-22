import {AuthProvider} from '@/providers/AuthProvider'
import {UserDataProvider} from '@/providers/UserDataProvider'
import {QueryClient} from '@tanstack/react-query'
import {QueryClientProvider} from 'react-query'
import '../index.css'
import BaseLayout from '@/layouts'

const queryClient = new QueryClient()

export default function App({Component, pageProps}) {
  const Layout = Component.Layout || (({children}) => children)

  return (
    <QueryClientProvider client={queryClient}>
      <UserDataProvider>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </UserDataProvider>
    </QueryClientProvider>
  )
}
