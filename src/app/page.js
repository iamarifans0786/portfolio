import About from './about/page'
import Contact from './contact/page'
import Project from './projects/page'
import Skill from './skills/page'
import Testimonial from './testimonials/page'

export default function Home() {
  return (
    <div>
      <About />
      <div className='my-24'>
        <Skill />
      </div>
      <Project />
      <div className='my-24'>
      <Testimonial />
      </div>
      <Contact />
    </div>
  )
}
