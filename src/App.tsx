import MainLayout from "./layout/MainLayout"
import Hero from "./sections/Hero/Hero"
import Intro from "./sections/Intro/Intro"
import Services from "./sections/Services/Services"

function App() {
  return (
    <MainLayout>
      <Hero />
      <Intro />
      <Services />
    </MainLayout>
  )
}

export default App
