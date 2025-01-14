import { useState } from 'react'
import { ModalCard } from 'src/Components/Modals/ModalsContainer/ModalsContainer';
import { useAppDispatch, useAppSelector, useMediaQuery } from 'src/utils/hooks';
import { setProject } from 'src/redux/features/project.slice';
import Button from 'src/Components/Button/Button';
import ProjectCardSkeleton from './ProjectDetailsCard.Skeleton'
import { NotificationsService } from 'src/services'
import { ProjectDetailsQuery, Projects, useProjectDetailsQuery } from 'src/graphql';
import ErrorMessage from 'src/Components/Errors/ErrorMessage/ErrorMessage';
import { MEDIA_QUERIES } from 'src/utils/theme';
import { FaDiscord, } from 'react-icons/fa';
import { FiEye, FiGithub, FiGlobe, FiStar, FiTwitter } from 'react-icons/fi';
import CopyToClipboard from 'react-copy-to-clipboard';
import Badge from 'src/Components/Badge/Badge';
import { IoMdClose } from 'react-icons/io';
import { CgGitFork } from 'react-icons/cg';
import { Helmet } from 'react-helmet';
import OgTags from 'src/Components/OgTags/OgTags';
import qs from 'qs'


interface Props extends ModalCard {
    params: {
        projectId: string;
    }
}

type Project = NonNullable<ProjectDetailsQuery['getProject']>[number]

export default function ProjectDetailsCard({ params: { projectId }, ...props }: Props) {

    const dispatch = useAppDispatch();
    const [screenshotsOpen, setScreenshotsOpen] = useState(-1);


    const { isWalletConnected } = useAppSelector(state => ({
        isWalletConnected: state.wallet.isConnected,
    }));
    const isMdScreen = useMediaQuery(MEDIA_QUERIES.isMedium)

    const { data, loading, error } = useProjectDetailsQuery({
        variables: {
            projectsId: projectId!,
        },
        onCompleted: data => {
            dispatch(setProject((data.getProject?.[0] as any) ?? null))
        },
        onError: () => {
            dispatch(setProject(null));
        },
        skip: !Boolean(projectId),
        fetchPolicy: "no-cache"

    });



    const closeModal = () => {
        props.onClose?.();
    }




    if (error)
        return <div
            className={`modal-card max-w-[768px] ${!isMdScreen && 'rounded-0 w-full min-h-screen'}`}
        >
            <div className="p-64">
                <ErrorMessage type='fetching' message='Something Wrong happened while fetching project details, please try refreshing the page' />
            </div>
        </div>

    if (loading)
        return <ProjectCardSkeleton onClose={closeModal} isPageModal={true} />;


    const project = data?.getProject?.[0];

    if (!project) return <p>404</p>

    const links = [
        {
            value: project?.discord,
            text: project?.discord,
            icon: FaDiscord,
            colors: "bg-violet-100 text-violet-900",
        },
        {
            value: project?.website,
            text: project?.website?.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, ""),
            icon: FiGlobe,
            colors: "bg-gray-100 text-gray-900",
            url: project?.website
        },
        {
            value: project?.twitter,
            text: project?.twitter,
            icon: FiTwitter,
            colors: "bg-blue-100 text-blue-500",
            url: project?.twitter
        },
        {
            value: project?.repository,
            text: project?.repository,
            icon: FiGithub,
            colors: "bg-pink-100 text-pink-600",
            url: project?.repository
        },
    ];
    const logo = project?.logo?.[0]['thumbnails']['large'].url ?? `https://avatars.dicebear.com/api/initials/${project.title}.svg`


    return (
        <div
            className={`modal-card max-w-[676px] ${(!isMdScreen) && '!rounded-0 w-full min-h-screen'}`}
        >
            <Helmet>
                <title>{project.title}</title>
                <meta name="description" content={project.description!} />
                <meta property="og:title" content={project.title!} />
                <meta property="og:description" content={project.description!} />
            </Helmet>
            <OgTags
                title={project.title}
                description={project.description}
            />
            {/* Cover Image */}
            <div className="relative h-[120px] lg:h-[80px] bg-gray-400">
                {/* <img className="w-full h-full object-cover" src={project?.cover_image} alt="" /> */}
                <div className="absolute w-full px-16 md:px-24 top-16 md:top-24 flex justify-between items-center">
                    {project?.yearFounded && <div className="flex gap-8 bg-gray-800 bg-opacity-60 text-white rounded-48 py-4 px-12 text-body6 font-medium">
                        {`Year founded ${project.yearFounded}`}
                    </div>}
                    <div className="flex gap-8 ml-auto">
                        <button className="w-32 h-32  bg-gray-800 bg-opacity-60 text-white rounded-full hover:bg-opacity-40 text-center flex flex-col justify-center items-center" onClick={closeModal}><IoMdClose className=' inline-block' /></button>
                    </div>
                </div>
            </div>
            <div className="p-24 flex flex-col gap-24">

                {/* Title & Basic Info */}
                <div className="flex flex-col mt-[-80px] md:flex-row md:mt-0 gap-24 md:items-center relative">
                    <div className="flex-shrink-0 w-[108px] h-[108px]">
                        <img className="w-full h-full object-cover border-2 bg-white border-gray-200 rounded-24" src={logo} alt="" />
                    </div>
                    <div className='flex flex-col gap-8 items-start justify-between'>
                        <a href={project?.website!} target='_blank' rel="noreferrer"><h3 className="text-body1 font-bold">{project?.title}</h3></a>
                        <div>
                            <span className="font-medium text-body4 text-gray-600">{project?.category}</span>
                        </div>
                    </div>
                </div>


                {/* About */}
                <div>
                    <p className="text-body6 uppercase font-medium text-gray-400 mb-8">About</p>
                    <div className=" text-body4 text-gray-600 leading-normal whitespace-pre-line">
                        {project?.description}
                    </div>

                    {/* Links */}
                    <div className="mt-16 flex flex-wrap gap-16">
                        {links.filter(link => !!link.value).map((link, idx) =>
                        (link.url ? <a
                            key={idx}
                            href={link.url!}
                            className={`w-40 aspect-square rounded-full flex justify-center items-center ${link.colors}`}
                            target='_blank'
                            rel="noreferrer">
                            <link.icon className="scale-125" />
                        </a>
                            :
                            <CopyToClipboard
                                text={link.value!}
                                onCopy={() => NotificationsService.info(" Copied to clipboard", { icon: "📋" })}
                            >
                                <button
                                    key={idx}
                                    onClick={() => { }}
                                    className={`w-40 aspect-square rounded-full flex justify-center items-center ${link.colors}`}
                                >
                                    <link.icon className="scale-125" />
                                </button>
                            </CopyToClipboard>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="text-body6 uppercase font-medium text-gray-400 mb-8">DATA</p>
                    <div className="flex flex-wrap gap-8">
                        {project?.dead !== null && <Badge color='none' className='bg-red-100 text-gray-600' size='sm'>💀 Dead</Badge>}
                        {project?.createdAt !== null && <Badge size='sm' className='!text-gray-500'>Created at: <span className="font-bold text-gray-800">{new Date(project.createdAt).toLocaleDateString()}</span> </Badge>}
                        {project?.companyName !== null && <Badge size='sm' className='!text-gray-500'>Company Name: <span className="font-bold text-gray-800">{project.companyName}</span> </Badge>}
                        {project?.endDate !== null && <Badge size='sm' className='!text-gray-500'>End date: <span className="font-bold text-gray-800">{new Date(project.endDate).toLocaleDateString()}</span> </Badge>}
                        {project?.openSource !== null && <Badge size='sm' className='!text-gray-500'>Open source: <span className="font-bold text-gray-800">{project.openSource ? "Yes" : "No"}</span> </Badge>}
                        {project?.license !== null && <Badge size='sm' className='!text-gray-500'>License: <span className="font-bold text-gray-800">{project.license}</span> </Badge>}
                        {project?.language !== null && <Badge size='sm' className='!text-gray-500'>Language: <span className="font-bold text-gray-800">{project.language}</span> </Badge>}
                        {project?.updatedAt !== null && <Badge size='sm' className='!text-gray-500'>Last updated at: <span className="font-bold text-gray-800">{new Date(project.updatedAt).toLocaleDateString()}</span> </Badge>}
                    </div>
                </div>
                {!!project.repository && <div>
                    <p className="text-body6 uppercase font-medium text-gray-400 mb-8">Repository</p>
                    <a href={project.repository} target='_blank' className='text-blue-500' rel="noreferrer">{project.repository}</a>
                    <div className="flex flex-wrap gap-16 text-gray-600 mt-8">
                        {!!project.stars && <div className='flex gap-8 items-center'><FiStar /> {project.stars}</div>}
                        {!!project.forks && <div className='flex gap-8 items-center'><CgGitFork /> {project.forks}</div>}
                        {!!project.watchers && <div className='flex gap-8 items-center'><FiEye /> {project.watchers}</div>}
                    </div>
                </div>}

                <hr className="bg-gray-100" />

                <div className="text-center">
                    <h3 className="text-body4 text-body-600">Want to suggest any changes to this project?</h3>
                    <Button
                        color='gray'
                        size='md'
                        className="my-16"
                        href={createEditUrl(project)}
                        newTab
                    // onClick={onClaim}
                    >Request Edit 📝</Button>
                </div>
            </div>
        </div>
    )
}


function createEditUrl(project:Project){
    const baseUrl = 'https://airtable.com/shrlMIVAhkp5khCrs';
    
    const params = {
        "Project": project?.id,
        "Title": project?.title,
        "Description": project?.description,
        "Website": project?.website,
        "Category": project?.category,
        "Year Founded": project?.yearFounded,
        "Dead": project?.dead,
        "Company": project?.companyName,
        "Twitter":project?.twitter,
        "Telegram":project?.telegram,
        "Discord":project?.discord,
        "LinkedIn":project?.linkedIn,
        "Repository":project?.repository,
        "License":project?.license,
    }

    const paramsWithPrefix = Object.entries(params).reduce((result,[key,value])=>{
        return {...result,[`prefill_${key}`]:value}
    },{})

    return baseUrl + `?${qs.stringify(paramsWithPrefix)}`
}