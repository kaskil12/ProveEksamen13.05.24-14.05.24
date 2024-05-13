import React from 'react';
import { Header } from '../../prefabs/Header';
import { Background } from '../../prefabs/Background';
import { Ansatt } from '../../prefabs/Ansatt';

function AnsatteSide() {
    return (
        <div>
            <Background />
            <Header></Header>
            <Ansatt />
        </div>
    );
}

export default AnsatteSide;