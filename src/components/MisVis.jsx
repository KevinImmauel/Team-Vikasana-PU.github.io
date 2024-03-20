import React from "react";

export default function MisVis( {head, content}) {
    return (
        <div className="px-10 py-10 lg:py-[40px] lg:px-[256px]">
            <h1 className="text-[40px] text-blue-950 mb-[16px] font-bold">{head}</h1>
            <p className="text-slate-500 text-xl font-medium leading-7">{content}</p>
        </div>
    )
}