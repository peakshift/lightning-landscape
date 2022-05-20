import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { usePopularTopicsQuery } from 'src/graphql';

const filters = [
    {
        text: "🔥 All",
        value: 0
    }, {
        text: "Lightning Network",
        value: 1
    }, {
        text: "Bitcoin",
        value: 2
    }, {
        text: "Cybersecurity",
        value: 3
    }, {
        text: "Bounties",
        value: 4
    }, {
        text: "Grants",
        value: 5
    },
]

interface Props {
    filterChanged?: (newFilter: number) => void
}

export default function PopularTopicsFilter({ filterChanged }: Props) {

    const [selected, setSelected] = useState(filters[0].value);

    const topicsQuery = usePopularTopicsQuery();


    const filterClicked = (newValue: number) => {
        if (selected === newValue)
            return
        setSelected(newValue);
        filterChanged?.(newValue);
    }

    return (
        <div className='bg-white border rounded-12 p-16'>
            <p className="text-body2 font-bolder text-black mb-16">Topics</p>
            <ul className=' flex flex-col gap-16'>
                {topicsQuery.loading ?
                    Array(4).fill(0).map((_, idx) => <li
                        key={idx}
                        className={`flex items-start rounded-8 font-bold`}

                    >
                        <span className='bg-gray-50 rounded-8 w-40 h-40 text-center py-8'> </span>
                        <span className="self-center px-16"><Skeleton width={'10ch'} />
                        </span>
                    </li>
                    )
                    :
                    topicsQuery.data?.popularTopics.map((f, idx) => <li
                        key={f.id}
                        className={`flex items-start rounded-8 cursor-pointer font-bold ${f.id === selected && 'bg-gray-50'}`}
                        onClick={() => filterClicked(f.id)}
                    >
                        <span className='bg-gray-50 rounded-8 w-40 h-40 text-center py-8'>{f.icon}</span>
                        <span className="self-center px-16">
                            {f.title}
                        </span>
                    </li>)}
            </ul>
        </div>
    )
}
