import React, { useState } from "react";
import classes from './app.module.scss';
import { Link } from "react-router-dom";
import About from "@/pages/about/About";
import avatarpng from '@/assets/avatar.png';
import avatarjpg from '@/assets/avatar.jpg';
import Image from '@/assets/app-image.svg';

//Tree shaking - до тех пор пока ф-ция не заюзана в итоговый бандл она не попадет
function TODO() {
    TODO2()
}


function TODO2() {
      throw new Error();
}



export const App = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => 
    // setCount(prev => prev + 1);
    TODO();
    //  TODO('51235');
    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }

    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    // if(__ENV__ === 'development') {
    //     //addDevtools()
    // }


    return (
        <div>
            <div data-testid={'App.DataTestId'}>
                <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
                <div>
                    <img width={100} height={100} src={avatarpng} alt="" />
                    <img width={100} height={100} src={avatarjpg} alt="" />
                </div>
            </div>
            <div>
                dfgfdfgdffg
                dfgdfgdfgdfdfg
                dfgdfgdfg1234234
                dfgdgdfgdfgdfgdfg34r6734564
                <Image color={'red'} width={50} height={50}  />
            </div>
            <Link to={'/about'}>about</Link> 
            <br />
            <Link to={'/shop'}>shop</Link> 
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}><span>
                asdasd
            </span></button>
            <About />
        </div>
    );
};

