import SkillCard from '#/components/SkillCard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
    <h1>Hello</h1>
    <ul>
      <li>
        <SkillCard name="Tanstack Start"/>
      </li>
         <li>
        <SkillCard name="MongoDB"/>
      </li>
         <li>
        <SkillCard name="TypeScript"/>
      </li>
      
    </ul>
    </main>
  )
}
