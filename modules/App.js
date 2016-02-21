import React from 'react'
import './styles.css'

export default React.createClass({
  render() {
    return (
      <div className="content">
        <p>
          Go change <code>.content</code> in <code>modules/styles.css</code>.
        </p>
        <p>
          The console indicates a hot update but nothing updates :(
        </p>
      </div>
    )
  }
})

