import { h } from 'preact'

import { root } from './Home.module.scss'

export default function Home() {

  return (
    <div className={root}>
      <h1>Hello World!</h1>
    </div>
  )
}