import { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { wrapper } from '../redux'
import { AppProvider } from '@shopify/polaris'
import eTranslations from '@shopify/polaris/locales/en.json'

import '@shopify/polaris/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider i18n={eTranslations}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppProvider>
	)
}

export default wrapper.withRedux(MyApp);
