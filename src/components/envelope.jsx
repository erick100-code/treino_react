function Envelope({ name, img}) {
    return (
        <div className="bg-white rounded-[30px] flex items-center gap-[0px_15px] p-[16px_7px]">
            <img src={img} alt={name} className="rounded-[50px] min-w-[59px] min-h-[59px] max-w-[60px] max-h-[60px] object-cover"/>
            
            <div className="flex flex-col gap-[5px_0px]">
                <span className="text-blue-700 font-semibold text-2xl">{name}</span>

                <p className="text-blue-900 font-normal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eaque libero autem tenetur fugit doloremque...
                </p>
            </div>
        </div>
    )
}

export default Envelope