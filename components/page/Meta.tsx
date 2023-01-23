import Head from 'next/head'

type Props = {
	title: string
	description: string
}
const Meta = ({ title, description }: Props) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
		</Head>
	)
}

export default Meta
