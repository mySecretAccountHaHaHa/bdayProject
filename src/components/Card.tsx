export function Card({cake, slice, cap, base, stage}: {cake: string, slice: string, cap: string, base: string, stage: number}) {
    return <div className="flex flex-col -translate-y-15 items-center justify-center mb-0 h-min">
        <div className="flex flex-col justify-center items-center">
            {(stage >= 1) && <div className="translate-y-10 items-center justify-center">
                <img src={cap} alt="cap" className="w-30 h-45"/>
            </div>}

            <div className="justify-center items-center">
                <img src={base} alt="base" className="w-78 h-110 rounded-md"/>
            </div>
            
            {(stage == 3) && <div className="-translate-y-60 translate-x-10 items-center justify-center">
                <img src={slice} alt="slice"  className="w-15 h-15"/>
            </div>}

            {(stage == 2) && <div className="-translate-y-45 items-center justify-center">
                <img src={cake} alt="cake" />
            </div>}
        </div>
    </div>
}