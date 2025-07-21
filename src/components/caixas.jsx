import { v4 } from "uuid"
import Envelope from "./envelope"

function Cx({ usuarios, inpvalue, filtrados }) {
 
    return (    
        <div>
            {   inpvalue.length == 0 ? (
                <ul className="flex flex-col gap-[20px_0px] ">
                    {usuarios.map(indice => { 
                        return (                           
                            <li key={v4()}>
                                <Envelope img={indice.src} name={indice.name} />
                            </li>
                        )
                    })}
                </ul>
                )
                : (
                    <ul className="flex flex-col gap-[20px_0px]">
                        {filtrados.map(indice => {
                            return (
                                <li key={v4()}>
                                    <Envelope img={indice.src} name={indice.name} />
                                </li>
                            )
                        })}
                    </ul> 
                )
            }
        </div>
    )
}

export default Cx