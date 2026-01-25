import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({ job }) => {
    const navigate = useNavigate();
    // const jobId = "lsekdhjgdsnfvsdkjf";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
    }

    return (
        <div className='rounded-md border border-gray-100 bg-white p-4 shadow-xl sm:p-5'>
            <div className='flex items-start justify-between gap-3'>
                <p className='text-sm text-gray-500'>
                    {daysAgoFunction(job?.createdAt) === 0
                        ? "Today"
                        : `${daysAgoFunction(job?.createdAt)} days ago`}
                </p>
                <Button variant="outline" className="shrink-0 rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            <div className='mt-3 flex items-center gap-3'>
                <Button className="h-12 w-12 p-0" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div className='min-w-0'>
                    <h1 className='truncate text-base font-medium sm:text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>

            <div className='mt-3'>
                <h1 className='line-clamp-2 text-base font-bold sm:text-lg'>{job?.title}</h1>
                <p className='mt-1 break-words text-sm text-gray-600'>{job?.description}</p>
            </div>

            <div className='mt-4 flex flex-wrap items-center gap-2'>
                <Badge className={'font-bold text-blue-700'} variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className={'font-bold text-[#F83002]'} variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className={'font-bold text-[#7209b7]'} variant="ghost">
                    {job?.salary}LPA
                </Badge>
            </div>

            <div className='mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4'>
                <Button
                    onClick={() => navigate(`/description/${job?._id}`)}
                    variant="outline"
                    className='w-full sm:w-auto'
                >
                    Details
                </Button>
                <Button className="w-full bg-[#007BFF] text-black hover:bg-white sm:w-auto">
                    Save For Later
                </Button>
            </div>
        </div>
    )
}

export default Job
