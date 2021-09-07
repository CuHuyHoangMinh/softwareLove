import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderLink = ({name, link}) => (
      <a>
        <Link to={link}
              style={{
                float: 'right',
                color: 'white',
                textAlign: 'right',
                textDecoration: 'none',
                padding : `4px`,
              }}
        >{name}</Link>
      </a>
)


export default HeaderLink
