import { v4 } from "uuid"

function Cx({ usuarios, inpvalue, filtrados }) {

    return (    
        <div>
            { inpvalue.length == 0 ? (
                <ul className="bg-white text-black">
                    {usuarios.map(indice => {
        
                        return (
                            <li key={v4()}>
                                {indice.name}
                            </li>
                        )
        
                    })}
                </ul>
            )
                : 
                <ul className="bg-white text-black">
                    {filtrados.map(indice => {
                        return (
                            <li key={v4()}>
                                {indice.name}
                            </li>
                        )
                    })}
                </ul> 
            }
        </div>
    )
}

export default Cx