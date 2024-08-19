import { type Project as ProjectProps } from '@/types';
import { Card } from './Card';
import { Carrousel } from './Carrousel';
import { Technology } from './Technology';
import { Details } from './Details';

export const Project = ({ title, description, technologies, responsabilities, roles, demoLink, screenshots, repoLink }: ProjectProps) => {
  return (
    <Card aditionalClassNames='h-fit'>
      <h3 className="text-xl m-2 font-bold">{title}</h3>

      {screenshots && <Carrousel images={screenshots} />}

      <p className="mt-2">{description}</p>

      <h4 className="mt-4 text-lg font-semibold">Tecnologías</h4>
      <section className='flex gap-2 flex-wrap p-2 justify-center'>
        {technologies.map(({ name, icon }) => (
          <Technology key={name} name={name} icon={icon} />
        ))}
      </section>

      <Details title="Responsabilidades" content={responsabilities} />
      <Details title="Roles" content={roles} />

      <section className="flex flex-wrap gap-2">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="bg-indigo-300 px-2 rounded-md text-indigo-800">
            Demo
          </a>
        )}
        {repoLink && (
          <a href={repoLink} target='_blank' rel="noopener noreferrer" className="rounded-md px-2 flex gap-2 items-center bg-slate-900 border border-slate-600 text-slate-300">
            <span className="fa-brands fa-github"></span>
            Repositorio
          </a>
        )}
      </section>
    </Card>
  )
}