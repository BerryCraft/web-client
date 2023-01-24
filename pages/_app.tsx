import '../styles/globals.scss'
import '@/styles/login-form.scss'
import '@/styles/register-form.scss'
import '@/styles/loader.scss'

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from '@/components/loader/Loader'

export default function App({ Component, pageProps }: AppProps) {
	let persistor = persistStore(store)

	return (
		<Provider store={store}>
			<PersistGate loading={<Loader />} persistor={persistor}>
				<Component {...pageProps} />
			</PersistGate>
		</Provider>
	)
}
