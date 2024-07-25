import React from 'react'
import './header.css'
export const Header = () => {
  return (
    <div>
        <section className="hero is-primary is-medium has-background-image" >
            <div className="hero-head">
                <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="../assets/logoSTH.png" width="112" height="28" alt="Logo" />
                    </a>
                    <span className="navbar-burger" data-target="navbarMenuHeroA">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    </div>
                    <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active"> Home </a>
                        <a className="navbar-item"> Congresos </a>
                        <a className="navbar-item"> Nosotros </a>
                        <span className="navbar-item">
                        <a className="button is-primary is-inverted">
                            <span className="icon">
                            <i className="fab fa-github"></i>
                            </span>
                            <span>Asóciate</span>
                        </a>
                        </span>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                <p className="title">Science, Tech & Humanities A.C.</p>
                <p className="subtitle">Acércate a las oportunidades</p>
                </div>
            </div>
            <div className="hero-foot">
                <nav className="tabs">
                <div className="container">
                    <ul>
                    <li className="is-active"><a>Overview</a></li>
                    <li><a>Modifiers</a></li>
                    <li><a>Grid</a></li>
                    <li><a>Elements</a></li>
                    <li><a>Components</a></li>
                    <li><a>Layout</a></li>
                    </ul>
                </div>
                </nav>
            </div>
</section>
    </div>
  )
}
