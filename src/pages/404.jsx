import React, { Component } from "react"
import "../styles/layout.scss"
export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <h1 className="not-found-text">
          Whoops, looks like this page doesn't exist{" "}
          <span role="img" aria-label="confused-emoji">
            😕
          </span>
        </h1>
        <a className="not-found-link"href="/">
          Go Home
        </a>
      </div>
    )
  }
}
