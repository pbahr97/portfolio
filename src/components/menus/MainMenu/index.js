import React from "react"
import { graphql, StaticQuery } from "gatsby"
import MainMenuWrapper from "./MainMenuWrapper"
import MenuItem from "./MenuItem"
import SiteInfo from "components/siteinfo"
import MainMenuInner from "./MainMenuInner"

const MainMenu = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems(
            filter: { name: { eq: "Mainmenu" } }
          ) {
            edges {
              node {
                name
                items {
                  title
                  object_slug
                }
              }
            }
          }
        }
      `}
      render={props => (
        <MainMenuWrapper>
          <MainMenuInner>
            <SiteInfo />
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <MenuItem to={item.object_slug} key={item.title}>
                  {item.title}
                </MenuItem>
              )
            )}
          </MainMenuInner>
        </MainMenuWrapper>
      )}
    />
  )
}

export default MainMenu
