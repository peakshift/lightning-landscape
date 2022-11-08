
import { MdClose } from 'react-icons/md'
import ASSETS from 'src/assets'
import Badge from 'src/Components/Badge/Badge'
import { Category } from 'src/features/Projects/Components/Categories/Categories'
import { useProjectsFilters } from '../filters-context'

type Props = {
    selectedCategry: Category | null
}

export default function Header(props: Props) {



    const { filters, filtersEmpty, removeFilter } = useProjectsFilters();

    const onCategoryPage = !!props.selectedCategry?.name;
    const onSearchPage = !onCategoryPage && !filtersEmpty


    const title = onCategoryPage ? `${props.selectedCategry?.name} projects` :
        filtersEmpty ? "Discover 1,592 lightning projects" : "All lightning projects";

    const subtitle = onCategoryPage ? "" :
        filtersEmpty ? "Explore a directory of lightning startups, projects, and companies"
            : ""


    return (
        <div className='h-[280px] rounded-20 overflow-hidden relative text-center flex flex-col justify-center items-center gap-8'>
            <img src={ASSETS.CoverImage} alt="" className='absolute inset-0 opacity-100 w-full h-full object-cover object-bottom z-[-1]' />
            {/* <div className='absolute inset-0 w-full h-full bg-gray-300 bg-opacity-50   z-[-1]' /> */}
            {/* <Link
                to={PAGES_ROUTES.projects.default}
                className="
              w-[48px] h-[48px] bg-white hover:bg-gray-200 
              absolute top-24 left-24 md:top-1/2 md:left-40 md:-translate-y-1/2
               rounded-full text-center flex justify-center items-center">
                <FiArrowLeft className=' inline-block text-body2 lg:text-body1' /></Link> */}
            <div className="content-container">
                <div className="flex flex-col justify-center items-center gap-8">
                    <h1
                        className='text-primary-500 text-h1 font-medium'
                    >{title}</h1>
                    {subtitle &&
                        <p className="text-gray-600 font-medium text-body1">{subtitle}</p>
                    }
                    {!filtersEmpty && <div className=" ">
                        <p className="text-gray-500 font-medium text-body4 mb-8 mt-8 text-center">filtered by</p>
                        <div className="flex gap-8 flex-wrap">
                            {filters?.categories && filters.categories.length > 0 && <Badge size='sm'>{filters.categories[0]?.icon && <i className={`fa-solid fa-${filters.categories[0]?.icon} mr-4 text-gray-700`}></i>} <span className='font-bold text-gray-700'>{filters.categories[0].name}</span> <button onClick={() => removeFilter("categories")} className='ml-4 text-gray-600 hover:scale-125'><MdClose /></button> </Badge>}
                            {filters?.tags && filters.tags.length > 0 && <Badge size='sm'>🏷️ <span className='font-bold text-gray-700'>{filters.tags.map(t => t.label).join(', ')}</span> <button onClick={() => removeFilter("tags")} className='ml-4 text-gray-600 hover:scale-125'><MdClose /></button> </Badge>}
                            {filters?.yearFounded && <Badge size='sm'>📆 Founded in <span className='font-bold text-gray-700'>{filters.yearFounded}</span> <button onClick={() => removeFilter("yearFounded")} className='ml-4 text-gray-600 hover:scale-125'><MdClose /></button> </Badge>}
                            {filters?.projectStatus && <Badge size='sm'>🌱 Status: <span className='font-bold text-gray-700'>{filters?.projectStatus}</span> <button onClick={() => removeFilter("projectStatus")} className='ml-4 text-gray-600 hover:scale-125'><MdClose /></button> </Badge>}
                            {filters?.projectLicense && <Badge size='sm'>💻 <span className='font-bold text-gray-700'>{filters.projectLicense}</span> <button onClick={() => removeFilter("projectLicense")} className='ml-4 text-gray-600 hover:scale-125'><MdClose /></button> </Badge>}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
