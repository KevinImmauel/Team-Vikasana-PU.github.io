import React, { useState } from 'react';
import { LaptopMinimal,Satellite,Podcast,GlobeLock,Bot } from 'lucide-react';
import MembersOnyx from './MembersOnyx';
import MembersVayuvega from './MembersVayuvega';
import MembersPR from './MembersPR';
import MembersHexa from './MembersHexa';
import MembersRobotics from './MembersRobotics';

export default function TeamsComp() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <div className='px-[160px] flex flex-col items-center'>
        <div className='w-[1120px] h-[82px] mb-[40px] bg-white flex justify-between items-center px-[28px] text-blue-950 text-2xl font-medium rounded-[69px]'>
            <div className={`py-[12px] px-[16px] rounded-[40px] flex items-center ${toggleState === 1 ? "bg-blue-950 text-white" : "bg-white"}`} onClick={() => {toggleTab(1)}}>
                <p className='mr-[14px]'>Onyx</p>
                <LaptopMinimal />
            </div>
            <div className={`py-[12px] px-[16px] rounded-[40px] flex items-center ${toggleState === 2 ? "bg-blue-950 text-white" : "bg-white"}`}  onClick={() => {toggleTab(2)}}>
                <p className='mr-[14px]'>Vayuvega</p>
                <Satellite />
            </div>
            <div className={`py-[12px] px-[16px] rounded-[40px] flex items-center ${toggleState === 3 ? "bg-blue-950 text-white" : "bg-white"}`} onClick={() => {toggleTab(3)}}>
                <p className='mr-[14px]'>Public Relations</p>
                <Podcast />
            </div>
            <div className={`py-[12px] px-[16px] rounded-[40px] flex items-center ${toggleState === 4 ? "bg-blue-950 text-white" : "bg-white"}`} onClick={() => {toggleTab(4)}}>
                <p className='mr-[14px]'>0xHexa</p>
                <GlobeLock />
            </div>
            <div className={`py-[12px] px-[16px] rounded-[40px] flex items-center ${toggleState === 5 ? "bg-blue-950 text-white" : "bg-white"}`} onClick={() => {toggleTab(5)}}>
                <p className='mr-[14px]'>Robotics</p>
                <Bot />
            </div>
        </div>
        
        <div className={` ${toggleState === 1 ? "flex" : "hidden"}`}>
            <MembersOnyx />
        </div>
        
        <div className={`items-center justify-center ${toggleState === 2 ? "flex" : "hidden"}`}>
        <MembersVayuvega />
        </div>
        <div className={`items-center justify-center ${toggleState === 3 ? "flex" : "hidden"}`}>
        <MembersPR />
        </div>
        <div className={`items-center justify-center ${toggleState === 4 ? "flex" : "hidden"}`}>
        <MembersHexa />
        </div>
        <div className={`items-center justify-center ${toggleState === 5 ? "flex" : "hidden"}`}>
        <MembersRobotics />
        </div>
    </div>
  )
}