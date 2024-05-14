import React from 'react';
import { Header } from '../../prefabs/Header';
import { Background } from '../../prefabs/Background';
import { Ansatt } from '../../prefabs/Ansatt';
import Footer from '../../prefabs/Footer';

function AnsatteSide() {
    return (
        <div>
            <Background />
            <Header></Header>
            <Ansatt />
            <Footer></Footer>
        </div>
    );
}

export default AnsatteSide;