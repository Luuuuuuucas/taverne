//import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Menu from './components/sections/Menu'
import Desserts from './components/sections/Desserts'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'

export default function Home() {
  return (
    <main className="flex flex-col">
      <About />
      <Menu />
      <Desserts />
      <Team />
      <Contact />
    </main>
  )
}