import React from "react";

export default function Button( {content , icon} ){
    return(
        <button className="px-[32px] py-[16px] border-2 rounded-[24px] border-blue-950 items-center justify-center gap-2.5 inline-flex">
            {icon}
            <p className="text-xl text-blue-950 font-medium">{content}</p>
        </button>
    )
}