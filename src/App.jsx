import React, { useState } from 'react'
import Header from './components/Header'
import RecipeCard from './components/RecipeCard'
import recipes from './data/recipes'

export default function App() {
  const [email, setEmail] = useState('')

  function handleSubscribe(e) {
    e.preventDefault()
    const to = 'hello@globake.co'
    const subject = encodeURIComponent('Subscribe to Globake')
    const body = encodeURIComponent(`Please subscribe this email to Globake updates:\n\nEmail: ${email}`)
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  const markets = [
    { date: 'Sat Apr 10', where: 'Town Square Farmers Market — 9am–1pm' },
    { date: 'Sun Apr 18', where: 'Riverside Market — 10am–2pm' },
    { date: 'Sat Apr 24', where: 'Greenfield Farmers Market — 8am–12pm' }
  ]

  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <h2>Globake — Fresh cookies at your local farmers markets</h2>
            <p className="tagline">Crumbl-style indulgence with small-batch, globally inspired flavors. Stop by our stall for a fresh cookie and grab a printed flyer or order ahead.</p>
            <div className="hero-ctas">
              <button className="cta" onClick={() => window.print()}>Print Flyer</button>
              <a className="cta ghost" href="#markets">See markets</a>
            </div>
          </div>
          <div className="hero-right subscribe">
            <h4>Join our market list</h4>
            <form onSubmit={handleSubscribe} className="subscribe-form">
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" type="email" required />
              <button className="cta" type="submit">Subscribe</button>
            </form>
            <small className="muted">We send a weekly market schedule and early-bird flavors.</small>
          </div>
        </section>

        <section id="markets" className="markets">
          <h3>Upcoming markets</h3>
          <ul>
            {markets.map((m, i) => (
              <li key={i}><strong>{m.date}</strong> — {m.where}</li>
            ))}
          </ul>
        </section>

        <section className="grid">
          {recipes.map(r => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} Globake — baked with curiosity · <a href="mailto:hello@globake.co">hello@globake.co</a></footer>
    </div>
  )
}
