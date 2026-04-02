import { Helmet } from "react-helmet-async"

type SEOProps = {
  title: string
  description: string
  keywords?: string
  image?: string
  url?: string
  type?: "website" | "article"
}

const DEFAULT_TITLE = "SEMA Space — Spatial Architecture Studio"
const DEFAULT_DESCRIPTION =
  "SEMA Space adalah studio arsitektur dan desain ruang yang berfokus pada hunian tenang, fungsional, dan relevan untuk kehidupan sehari-hari."

const DEFAULT_IMAGE = "https://sema-space.vercel.app/sema.png"
const DEFAULT_URL = "https://sema-space.vercel.app"

function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url = DEFAULT_URL,
  type = "website",
}: SEOProps) {
  const fullTitle = title ? `${title} | SEMA Space` : DEFAULT_TITLE

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta name="keywords" content={keywords || "arsitektur, interior, desain rumah, rumah tenang, sema space"} />
      <meta name="author" content="SEMA Space" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#111111" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || DEFAULT_DESCRIPTION} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="SEMA Space" />
      <meta property="og:locale" content="id_ID" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || DEFAULT_DESCRIPTION} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Helmet>
  )
}

export default SEO