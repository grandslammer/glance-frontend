import { default as NextHead } from "next/head"
function Head({ title, desc, children }) {
  return (
    <NextHead>
      <title>{`${title} - Glance`}</title>
      <meta name="description" content={`${desc} - Glance`} />
      {children}
    </NextHead>
  )
}

export default Head
