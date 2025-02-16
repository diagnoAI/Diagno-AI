import React from 'react'
import "../styles/Home.css";

function Home() {
  return(
    <>
      <section className="container">
        <h1>Detect Kidney Stones Early and Take Control of Your Health</h1>
        <p>Using advanced algorithms, our app provides quick and accurate kidney stone detection so you can take timely action and prevent further complications.</p>
        <a href="/login" className="cta-button">Get Started</a>
      </section>
      <section id="features">
        <div className="feature">
          <h3>Fast Results</h3>
          <p>Get results within minutes and take action promptly.</p>
        </div>
        <div className="feature" id="middle">
          <h3>User-Friendly</h3>
          <p>Easy-to-use interface designed for everyone.</p>
        </div>
        <div className="feature">
          <h3>Accurate Detection</h3>
          <p>Advanced technology ensures reliable detection.</p>
        </div>
      </section>
    </>
  )
}

export default Home
