import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/hero/Hero'
import WorkCard from '@/components/workcard/WorkCard'
import Section from '@/components/Section'
import Button from '@/components/buttons/Button'
import Columns from '@/components/grid/Columns'
import Column from '@/components/columns/Column'
import TagButton from '@/components/tags/TagButton'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero
        title = "Hi, I am Albert Arques."
        subtitle = "Full stack developer making things for the web."
        subtitle2 = {[
          "Based in center of ", 
          <a href="https://www.turismodeltadelebro.com/en/what-to-see-and-do-in-the-ebro-delta/" target='_blank'>
            <u>Ebro delta.</u>
          </a>
        ]}
      />
      <Section 
        id= "works"
        title = "Some of my works:"
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
            picture={"/default_product_img.png"}
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
        className="text-2xl"
      >
        <Columns
          cols="3"
          gap="4"
          className="text-xl"
        >
          <Column>
            <h3 className='font-bold py-2'>
              Languages
            </h3>
            <p className='flex flex-wrap'>
              <TagButton tag="PHP" />
              <TagButton tag="Javascript" />
              <TagButton tag="HTML" />
              <TagButton tag="CSS" />
              <TagButton tag="MySQL" />
              <TagButton tag="JAVA" />
            </p>
          </Column>
          <Column>
            <h3 className='font-bold py-2'>
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
            <h3 className='font-bold py-2'>
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

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
