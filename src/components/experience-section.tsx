import type * as React from 'react'
import { Experience } from './experience'

export const ExperienceSection: React.FC = () => (
  <Experience
    data={[
      {
        title: 'Mar 2021 - Apr 2021',
        content: (
          <>
            <h3 className='text-lg font-semibold mb-2'>[Full Stack Developer] Alkemy</h3>

            <ul className='list-disc pl-6 space-y-2 text-sm'>
              <li>
                Designed and developed a fully responsive website for a non-profit organization in
                Argentina, using HTML, CSS, and JavaScript to deliver a professional and
                user-friendly experience.
              </li>
              <li>
                Continuously expanding technical expertise by learning and applying Node.js, React,
                Material-UI, Git, and GitHub, staying up to date with the latest industry trends and
                best practices.
              </li>
              <li>
                Experienced in Agile methodologies, particularly Scrum, ensuring efficient
                collaboration and streamlined development workflows.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'May 2021 - Jul 2021',
        content: (
          <>
            <h3 className='text-lg font-semibold mb-2'>
              [Full Stack Developer] GLOBALTECH SCM SOLUTIONS GLOBALTECH SCM SOLUTIONS
            </h3>

            <ul className='list-disc pl-6 space-y-2 text-sm'>
              <li>
                Migration of a desktop Warehouse Management System (WMS) to React Native, enabling
                seamless inventory management via mobile devices and improving operational
                efficiency.
              </li>
              <li>
                Developed and optimized a RESTful API using NestJS, designing scalable endpoints to
                handle inventory and warehouse operations. Integrated SQL Server as the database,
                ensuring efficient data management and retrieval.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Jul 2023 - Dec 2023',
        content: (
          <>
            <h3 className='text-lg font-semibold mb-2'>[Tutor ReactJS] CoderHouse</h3>

            <ul className='list-disc pl-6 space-y-2 text-sm'>
              <li>
                Reviewed and provided feedback on student pre-deliveries, ensuring code quality and
                best practices.
              </li>
              <li>
                Actively assisted in live sessions by offering real-time support, clarifying
                concepts, and answering student queries via chat.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Aug 2021 - Present',
        content: (
          <>
            <h3 className='text-lg font-semibold mb-2'>[Front-end Developer] Wulpers</h3>

            <ul className='list-disc pl-6 space-y-2 text-sm'>
              <li>Developed component library using Storybook and MUI.</li>
              <li>
                Built landing pages with Next.js, optimizing SEO, performance, and responsiveness.
              </li>
              <li>
                Integrated CRM platform modules using GraphQL, Apollo Server, and Axios in a
                monorepo environment.
              </li>
            </ul>
          </>
        ),
      },
    ]}
  />
)
