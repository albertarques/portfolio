import { Roboto_Mono } from 'next/font/google'

import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import WorkCard from '@/components/workcard/WorkCard'
import Section from '@/components/Section'
import Button from '@/components/buttons/Button'
import Columns from '@/components/grid/Columns'
import Column from '@/components/columns/Column'
import TagButton from '@/components/tags/TagButton'

// const inter = Inter({ subsets: ['latin'] })
const robot = Roboto_Mono({ subsets: ['latin'] })


export default function Based() {

  return (
    <main className={`${robot.className}`}>
      
      <div className='flex flex-col frame border-f fixed overflow-y-scroll items-center'>
      <div className="effect-shape rounded-xl lg:rounded-[5rem] fixed"></div>
      <Navbar />
      <Hero
        title = "Hi, I am Albert Arques."
        subtitle = "Full stack developer making things for the web."
        subtitle2 = "Based in the middle of, Ebro delta."
        className="my-3"
      />
      <Section 
        id= "works"
        title = "Some of my works:"
        className="text-xl"
        >
          <div className='grid grid-cols-1 lg:grid-cols-3'>
            <WorkCard 
            title = "Work 1"
            description="This is the description for the work 1."
            picture={"/default_product_img.png"}
            tags = {["React", "Next.js", "Tailwind"]}
            />
            <WorkCard
            title = "Work 2"
            description="This is the description for the work 2."
            picture={"/985-536x354.jpg"}
            tags = {["React", "Next.js", "Tailwind"]}
            />
            <WorkCard
            title = "Work 3"  
            description="This is the description for the work 3."
            picture={"/default_product_img.png"}
            tags = {["React", "Next.js", "Tailwind"]}
            />
          </div>
        <Button>{"More works..."}</Button>
      </Section>
      <Section
        id= "skills"
        title = "My Skills"
        >
        <Columns
          cols="3"
          gap="4"
          >
          <Column>
            <h3 className={`${robot.className} font-bold py-2 mb-4`}>
              Languages
            </h3>
            <p className={`${robot.className} flex flex-wrap`}>
              <TagButton tag="PHP" />
              <TagButton tag="Javascript" />
              <TagButton tag="HTML" />
              <TagButton tag="CSS" />
              <TagButton tag="MySQL" />
              <TagButton tag="JAVA" />
            </p>
          </Column>
          <Column>
            <h3 className='font-bold py-2 mb-4'>
              Technologies
            </h3>
            <p className='flex flex-wrap'>
              <TagButton tag="React" />
              <TagButton tag="Next.js" />
              <TagButton tag="Tailwind" />
              <TagButton tag="Laravel" />
              <TagButton tag="MySQL" />
              <TagButton tag="Git" />
              <TagButton tag="Tailwind" />
              <TagButton tag="Bootstrap" />
            </p>

          </Column>
          <Column>
            <h3 className='font-bold py-2 mb-4'>
                Transversal
            </h3>
            <p className='flex flex-wrap'>
              <TagButton tag="Leadership" />
              <TagButton tag="Team player" />
              <TagButton tag="Problem solving" />
              <TagButton tag="Communication" />
              <TagButton tag="Creativity" />
              <TagButton tag="Adaptability" />
              <TagButton tag="Time management" />
            </p>
          </Column>
        </Columns>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold mb-4">About me</h2>
        <p className="text-xl">
          I am a full stack developer with a passion for web development. I have
          been working in the web development industry for more than 10 years.
          I have worked in different companies and projects, from small
          businesses to big companies. I have experience in both frontend and
          backend development, but I am more focused on frontend development.
        </p>
      </Section>
      </div>
    </main>
  )
}