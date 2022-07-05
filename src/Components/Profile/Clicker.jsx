import React, {useState} from "react";

const Clicker = () => {
    const [vibor, setVibor] = useState('Tanya');
    return (<div>
        <button onClick={()=>{setVibor('Tanya')
        }}>Tanya</button>
        <button onClick={()=>{setVibor('Vika')
        }}>Vika</button>
        <button onClick={()=>{setVibor('Sasha')
        }}>Sasha</button>
        <h1>{vibor}</h1>
        </div>
    )
}
export default Clicker;