
import { Link } from 'react-router-dom'
import Card from 'src/Components/Card/Card'
import Avatar from 'src/features/Profiles/Components/Avatar/Avatar'
import { User, useSimilarProjectsQuery } from 'src/graphql'
import { createRoute } from 'src/utils/routing'

interface Props {
    id: number
}

export default function SimilarProjectsCard({ id }: Props) {

    const query = useSimilarProjectsQuery({ variables: { projectId: id } })

    if (query.loading) return null;

    if (query.data?.similarProjects.length === 0) return null;

    return (
        <Card onlyMd>
            <h3 className="text-body2 font-bolder">🚀 Similar projects</h3>
            <ul className='flex flex-col'>
                {query.data?.similarProjects.map(project => {
                    return <Link key={project.id} to={createRoute({ type: "project", tag: project.hashtag })} className="md:border-b py-16 last-of-type:border-b-0 last-of-type:pb-0">
                        <li className="flex items-center gap-12">
                            <img className='w-48 aspect-square rounded-12 border border-gray-100' alt='' src={project.thumbnail_image} />
                            <div className='overflow-hidden'>
                                <p className="text-body4 text-gray-800 font-medium whitespace-nowrap overflow-hidden text-ellipsis">{project.title}</p>
                                <p className="text-body5 text-gray-500">{project.category.icon} {project.category.title}</p>
                            </div>
                        </li>
                    </Link>
                })}
            </ul>
        </Card>
    )
}
