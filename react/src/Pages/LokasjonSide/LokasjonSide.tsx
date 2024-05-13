import React from 'react';
import { Header } from '../../prefabs/Header';
import { Background } from '../../prefabs/Background';
import { Map } from '../../prefabs/Map';
import Boss from '../../assets/Boss.png';
function LokasjonSide() {
    return (
        <>
        <Background />
        <Header />
        <h1 className='text-white text-center text-9xl font-bold mt-9'>Om oss</h1>
        <img  src={Boss} className='hidden lg:block max-w-[50rem] max-h-[50rem] top-[10rem] right-[50rem] absolute' />
        <h1 className='absolute top-[30rem] right-[5rem] text-white text-4xl text-center max-w-[50rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident blanditiis ipsa placeat fugiat in labore a ipsam ipsum dolor quod pariatur accusantium dignissimos iusto qui, magnam cupiditate maiores mollitia.</h1>
        <Map />
        </>
    );
}

export default LokasjonSide;