import React from "react"
import PropTypes from "prop-types"
import cx from "classnames"

const Plan = ({ name, price, repositories, teamMembers, action, link, frequency, className }) => (
  <div className={cx(`card flex-grow-1`, className)}>
    <div className="card-body d-flex flex-column">
      <h5 className="card-title text-center">{name}</h5>

      <span className="d-block text-center">
        <span className="display-4 font-weight-normal">
          {typeof price === 'number' && (<span className="align-top font-size-2">$</span>)}
          {price}
          {typeof price === 'number' && (<span className="d-block text-secondary font-size-1">per {frequency}</span>)}
        </span>
      </span>

      <hr className="w-100"/>

      <p className="text-center mt-3">
        <span className="d-block font-size-2">{repositories}</span>
        <span className="text-muted">{repositories === 1 ? 'Repository' : 'Repositories'}</span>
      </p>

      <p className="text-center mt-3">
        <span className="d-block font-size-2">{teamMembers}</span>
        <span className="text-muted">Team Members</span>
      </p>

      <a href={link} className="btn btn-primary btn-block mt-auto">{action}</a>
    </div>
  </div>
)

Plan.defaultProps = {
  frequency: `month`,
}

Plan.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  action: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  frequency: PropTypes.oneOf([`month`, `year`]),
  className: PropTypes.string,
}

export default Plan
