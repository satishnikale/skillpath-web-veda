import "./App.css"
import { Header } from "./components/landing/Header"
import Hero from "./components/landing/Hero"
import CurrentPath from "./components/landing/CurrentPath"
import CourseSection from "./components/courses/CourseSection"
import Footer from "./components/landing/Footer"

export default function App() {
  return (
    <main className="skillpath-page">
      <Header />
      <Hero />
      <CurrentPath />
      <CourseSection sectionTitle="Explore Courses" cardGap={20} />
      <Footer />
    </main>
  )
}