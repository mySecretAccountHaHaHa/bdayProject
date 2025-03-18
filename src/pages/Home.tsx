import { useState, useRef } from "react";
import { Card } from "../components/Card";
import FinalShow from "../components/FinalShow";

export default function Home() {
    const [stage, setStage] = useState(0);

    const audioRef = useRef(new Audio("./src/assets/Mohammed_Rafi,_Laxmikant_Pyarelal_Baar_Baar_Din_Ye_Aaye_Happy-[AudioTrimmer.com].mp3"));

    return (
        (stage < 4 && <div className='flex flex-col items-center justify-center bg-[#c6daec]'>
        <div className="flex flex-col items-center justify-center p-10">
            <div className="font-emblema text-8xl text-pink-500">{(stage == 0 && "Hello Ms. Harman") || (stage == 1 && "Don't be surprised.") || (stage == 2 && "Go on, it's for you.") || (stage == 3 && "Hope it's tasty")}</div>
            {stage == 0 && <div className="font-emblema text-2xl mb-16">Welcome to your birthday party</div>}
            {stage == 1 && <div className="font-emblema text-2xl">There's more to come</div>}
        </div>
        
        <Card base={"./src/assets/her/" + ((stage == 0 && "welcome.jpg") || (stage == 1 && "cake.jpg") || (stage == 2 && "cap2.jpg") || (stage == 3 && "eat.jpg"))} cake={"./src/assets/cake.png"} slice={"./src/assets/slice.png"} cap={"./src/assets/cap.png"} stage={stage}/>

        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={() => {
            setStage(x => x + 1)
            if (stage == 0) {
                audioRef.current.play();
                audioRef.current.loop = true;
            } else if (stage >= 3) {
                audioRef.current.pause();
            }
        }}>{((stage == 0) && "Wear your cap") || ((stage == 1) && "Bring out the cake") || (stage == 2 && "Eat your cake") || (stage == 3 && "Happy Birthday!!!")}</button>
        </div>) ||
    (stage >= 4 && <FinalShow/>)
    )
}