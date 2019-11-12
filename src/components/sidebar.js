import React from "react"
import { Link } from "gatsby"

const Sidebar = () => (
  <aside>
    <h5 className="mt-0">Docs</h5>

    <ul className="list-unstyled">
      <li>
        <Link to="/docs/configuration">Config Reference</Link>
      </li>
    </ul>

    <h5>Rules</h5>

    <ul className="list-unstyled">
      <li>
        <Link to="/docs/rules#max-modifications">Max Modifications</Link>
      </li>

      <li>
        <Link to="/docs/rules#require-assignee">Require Assignee</Link>
      </li>

      <li>
        <Link to="/docs/rules#require-modified">Require Modified</Link>
      </li>
    </ul>
  </aside>
)

export default Sidebar
