import React, { useState } from 'react';
import Button from './Button';
import { LaptopMinimal,Satellite,Podcast,GlobeLock,Bot } from 'lucide-react';

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
        <div className={`mb-[40px] items-center justify-center ${toggleState === 1 ? "flex" : "hidden"}`}>
            <div className=''>
                <img src="/onyx-img-1.png" alt="" className='w-full h-full' />
            </div>
            <div className='w-3/5 pl-[100px]'>
                <h1 className='font-bold text-[40px] text-blue-950'>Onyx Coding Division</h1>
                <p className='text-slate-500 leading-7 text-xl font-medium my-[16px]'>Driven by curiosity and guided by Presidency University's esteemed Research & Innovation department, we're a student team building real-world robots. More than just competition bots, we create learning experiences for our university and proudly represent it at conferences across India and beyond. Our passion lies in research, innovation, and tackling engineering challenges. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together.</p>
                <Button content={"View Team"}/>
            </div>
        </div>
        <div className={`items-center justify-center ${toggleState === 2 ? "flex" : "hidden"}`}>
            <div>
                <img src="/aero-img-1.png" alt="" />
            </div>
            <div className='w-3/5 pl-[100px]'>
                <h1 className='font-bold text-[40px] text-blue-950'>Vayuvega Aerospace Division</h1>
                <p className='text-slate-500 leading-7 text-xl font-medium my-[16px]'>Driven by curiosity and guided by Presidency University's esteemed Research & Innovation department, we're a student team building real-world robots. More than just competition bots, we create learning experiences for our university and proudly represent it at conferences across India and beyond. Our passion lies in research, innovation, and tackling engineering challenges. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together.</p>
                <Button content={"View Team"}/>
            </div>
        </div>
        <div className={`items-center justify-center ${toggleState === 3 ? "flex" : "hidden"}`}>
            <div>
                <img src="/pr-img-1.png" alt="" />
            </div>
            <div className='w-3/5 pl-[100px]'>
                <h1 className='font-bold text-[40px] text-blue-950'>Public Relations Division</h1>
                <p className='text-slate-500 leading-7 text-xl font-medium my-[16px]'>Driven by curiosity and guided by Presidency University's esteemed Research & Innovation department, we're a student team building real-world robots. More than just competition bots, we create learning experiences for our university and proudly represent it at conferences across India and beyond. Our passion lies in research, innovation, and tackling engineering challenges. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together.</p>
                <Button content={"View Team"}/>
            </div>
        </div>
        <div className={`items-center justify-center ${toggleState === 4 ? "flex" : "hidden"}`}>
            <div>
                <img src="/hexa-img-1.png" alt="" />
            </div>
            <div className='w-3/5 pl-[100px]'>
                <h1 className='font-bold text-[40px] text-blue-950'>0xHEXA Cyber Security Division</h1>
                <p className='text-slate-500 leading-7 text-xl font-medium my-[16px]'>Driven by curiosity and guided by Presidency University's esteemed Research & Innovation department, we're a student team building real-world robots. More than just competition bots, we create learning experiences for our university and proudly represent it at conferences across India and beyond. Our passion lies in research, innovation, and tackling engineering challenges. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together.</p>
                <Button content={"View Team"}/>
            </div>
        </div>
        <div className={`items-center justify-center ${toggleState === 5 ? "flex" : "hidden"}`}>
            <div>
                <img src="/robo-img-1.png" alt="" />
            </div>
            <div className='w-3/5 pl-[100px]'>
                <h1 className='font-bold text-[40px] text-blue-950'>Robotics Division</h1>
                <p className='text-slate-500 leading-7 text-xl font-medium my-[16px]'>Driven by curiosity and guided by Presidency University's esteemed Research & Innovation department, we're a student team building real-world robots. More than just competition bots, we create learning experiences for our university and proudly represent it at conferences across India and beyond. Our passion lies in research, innovation, and tackling engineering challenges. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together. If you're hungry to expand your knowledge and collaborate with like-minded peers, Team Vikasana welcomes you. Let's turn ideas into impactful solutions, together.</p>
                <Button content={"View Team"}/>
            </div>
        </div>
    </div>
  )
}