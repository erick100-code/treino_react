import { SearchIcon } from "lucide-react"
import { useState } from "react"

function BarraDePesquisa(props) {

    const [stat, mudaStat] = useState(false)

    return (
        <div id="cxPesquisa" className={`bg-[white] rounded-[5px] p-[10px_50px_10px_10px] w-full flex items-center gap-[0px_10px] border-2 ${stat && 'border-2 border-indigo-600 text-indigo-700'}`}>
            <SearchIcon />
            <input type="text" name="pesq" id="pesq"  className={`outline-none w-full h-full  ${stat == true && 'text-indigo-500'}`} onFocus={() => mudaStat(true)} onBlur={() => mudaStat(false)} onChange={(event) => props.inpvalue(event.target.value.trim())}/>
        </div>
    )
}

export default BarraDePesquisa