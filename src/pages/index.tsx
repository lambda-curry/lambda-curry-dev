import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../images/logo.svg'
import LevelUp from '../images/levelUp.svg'
import Abstract from '../images/Abstract.webm'
import CoffeeBeans from '../images/CoffeeBeans.webm'
import styles from '../styles/index.module.scss'
import classNames from 'classnames'

const Hero = () => (
  <div className={styles['hero']}>
    <h1>
      <img className={styles['logo']} src={Logo} alt="Lambda Curry" />
    </h1>
    <h2 className={styles['subtitle']}>a digital development agency</h2>

    <button className={styles['cta']}>Hire us now</button>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles['row']}>
      <Hero />
      <div className={styles['col']}>
        <div className={classNames(styles['section'], styles['austin'])}>
          <h2 className={styles['title']}>
            Based in <span>Austin, Texas</span>
          </h2>
          <div className={styles['sectionContent']}>
            <p>
              We are an all American dev shop in the middle of the "Silicon
              Hills". We are readily available when your team is working, so
              there are fewer communication breakdowns.
            </p>
          </div>
        </div>
        <div className={classNames(styles['section'], styles['senior'])}>
          <video autoPlay muted loop preload="none">
            <source src={CoffeeBeans} type="video/webm" />
          </video>
          <h2 className={styles['title']}>
            Senior Level Talent{' '}
            <img
              className={styles['levelUp']}
              src={LevelUp}
              alt="level up icon"
            />
          </h2>
          <div className={styles['sectionContent']}>
            <p>
              We experience delivering high-impact projects. We enjoy the hard
              challenges and can help build an environment that is friendly for
              junior developers.
            </p>
          </div>
        </div>
        <div className={classNames(styles['section'], styles['more'])}>
          <video autoPlay muted loop preload="none">
            <source src={Abstract} type="video/webm" />
          </video>
          <h2 className={styles['title']}>
            More Than <span className="monospace">{`<Developers />`}</span>
          </h2>
          <div className={styles['sectionContent']}>
            <p>
              We are problem solvers, entrepreneurs, designers, architects,
              engineers, and much more. Together we can discover the best
              technological approach to your business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
