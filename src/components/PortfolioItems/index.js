import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

const PortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                title
                slug
                excerpt
                content
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props =>
        props.allWordpressWpPortfolio.edges.map(item => {
          return (
            <div key={item.id}>
              <h2>{item.node.title}</h2>
              <img src={item.node.featured_media.source_url} alt="Thumbnail" />
              <div dangerouslySetInnerHTML={{ __html: item.node.excerpt }} />
              <Link to={`/portfolio/${item.node.slug}`}>Read more</Link>
            </div>
          )
        })
      }
    />
  )
}

export default PortfolioItems
