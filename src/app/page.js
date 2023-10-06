import About from './about/page'
import Contact from './contact/page'
import Education from './education/page'
import Project from './projects/page'
import Skill from './skills/page'
import Testimonial from './testimonials/page'

export default function Home() {
  return (
    <div>
      <About />
      <Education/>
      <Skill />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  )
}
