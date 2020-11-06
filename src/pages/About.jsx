import React from 'react'

export const About = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-4">GitHub commits</h1>
        <p className="lead">
          Application shows git commit history for the current project through
          GitHub API
        </p>
        <h2>Objective</h2>
        <p>
          The goal of this project will be to create a web application that
          shows git commit history for the project you’re working on (looks a
          lot like recursion, huh?). You need to make many well-stated commits
          while working on this project and regularly push them up.
        </p>
        <p>
          You will need to sign up for a free GitHub account if you do not
          already have one, then create a public repository to store your work
          so that we will be able to see and review it. You can find
          documentation on the GitHub API here:
          <a href="https://developer.github.com/v3/" target="_blank">
            https://developer.github.com/v3/
          </a>
        </p>
        <p>
          You can use the Angular, Vue, or React framework. We are currently
          looking for candidates that know Angular or TypeScript.
        </p>
        <h2>Requirements</h2>
        <ul>
          <li>
            You must use the GitHub API - while you could make a scraper or
            devise another method to get the git commit history of your project,
            we would like to see how you work with an existing API.
          </li>
          <li>
            Your GitHub repository must be public - this will allow us to look
            at it and verify the accuracy of your code.
          </li>
          <li>
            The style of the page is up to you. Typically we use something like
            Bootstrap (
            <a href="http://getbootstrap.com" target="_blank">
              http://getbootstrap.com
            </a>
            ) for a lot of our projects, then style it to meet the business want
            or need later on.
          </li>
          <li>
            The page does not need to be a real-time view (it’s okay for us to
            refresh it to get the latest commits on your repository).
          </li>
        </ul>
      </div>
    </div>
  )
}
