
const Doing_Card = (props) => {
    return (

        <>


            <div className="bg-[#0f172a] text-white  rounded-xl shadow-md hover:shadow-lg hover:scale-[1.03] hover:border-emerald-400 border border-transparent transition-all duration-300 ease-in-out">


                <div class="bg-[#1a365db3] h-full rounded-xl shadow p-4 flex flex-col gap-2 border-3 border-[#20f6a733]">

                    <h1 className="text-4xl text-[#0cfdb4]"><i class={props.icon}></i></h1>

                    <h1 className="text-[20px] text-white font-bold mt-[10px]">{props.head}</h1>


                    <p className=' text-gray-200 text-[17px]'>{props.content}</p>

                </div>
             
            </div>

        </>
    )
}

export default Doing_Card;