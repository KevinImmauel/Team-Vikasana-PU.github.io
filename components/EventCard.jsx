import React from "react";


export default function EventCard({expired=false,imgSrc,eventName,eventDesc,date,time,regLink="#"}) {

    let statusLabel=(!expired)?(<label className="bg-[#D6FFD5] border border-[#04B700] rounded-lg py-1 px-2 w-fit h-fit font-sfprodisplay font-medium text-[15px] text-[#04B700]">UPCOMING EVENT</label>):(<label className="bg-[#FFD5D5] border border-[#B70000] rounded-lg py-1 px-2 w-fit h-fit font-sfprodisplay font-medium text-[15px] text-[#B70000]">EVENT EXPIRED</label>);

    return(
        <div className="bg-white p-6 ring-0 drop-shadow-md h-fit w-fit  rounded-3xl flex flex-col gap-6">
            <div className="flex flex-col gap-4">
                {statusLabel}
                <img className="w-[300px] h-[300px] object-cover    object-center rounded-xl aria-disabled:grayscale" aria-disabled={expired} src={imgSrc} alt={eventName}/>
                <div className="w-[300px]">
                    <p className="font-sfprodisplay font-bold   text-primary-0 text-xl truncate text-ellipsis     ">{eventName}</p>
                    <p className="font-sfprodisplay font-medium text-base   text-[#676B89]">{eventDesc}</p>
                </div>
                <div className="bg-[#F0F1F5]">
                    <p className="font-sfprodisplay font-medium     text-base text-center">{date}<span className="mx-1">&#124;</span>{time}</p>
                </div>
            </div>
            <a href={regLink} aria-disabled={expired} >
                <button className="bg-[#6731DA] w-full py-4 rounded-full text-white text-base font-sfprodisplay font-medium disabled:bg-[#909090]" disabled={expired}>REGISTER NOW</button>
            </a>
        </div>
    );
}