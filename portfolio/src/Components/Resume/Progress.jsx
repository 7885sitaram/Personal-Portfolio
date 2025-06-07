
const Progress = (props) => {
    return <div>

        <div>

            <div className='flex justify-between items-center mb-1'>
                <h2>{props.domain}</h2>
                <h2 className="text-[#0cfdb4]">{props.progress} </h2>

            </div>

            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
             <div className="bg-[#0cfdb4] h-2.5 rounded-full" style={{ width: `${props.progress}` }}></div>

            </div>

        </div>
    </div>;
}

export default Progress;