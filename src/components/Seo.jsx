import Head from 'next/head'

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle}`}</title>
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='description' content='Portafolio personal en NextJS de FranSCoder' />
      <meta name='robots' content='noindex, follow' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta property='og:title' content='Portafolio personal de Fran Sánchez' />
      <meta property='og:description' content='Portafolio personal en NextJS de FranSCoder' />
      <meta property='og:image' content='/portfolio-preview.png' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='627' />
      <meta property='og:url' content='https://franscoder.com/' />
      <meta property='og:type' content='website' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  </>
)

export default SEO
