import '@/styles/loader.scss'
import '@/styles/login-form.scss'
import '@/styles/register-form.scss'
import '../styles/globals.scss'

import type { AppProps } from 'next/app'

export function reportWebVitals(metric: any) {
	console.log(metric)
}

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
