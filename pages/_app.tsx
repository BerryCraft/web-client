import '@/styles/loader.scss'
import '@/styles/login-form.scss'
import '@/styles/register-form.scss'
import '../styles/globals.scss'

import Loader from '@/components/loader/Loader'
import { persistor, store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	})
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={<Loader />} persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
