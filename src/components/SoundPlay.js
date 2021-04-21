import React, { Component } from 'react'
import TempleOS from "../assets/Lydklip/TempleOSHymnRisen.mp3";
import {Howl, Howler} from "howler";
//SoundPlay Komponenten virker ikke lige pt. Meningen var at vi skulle kunne kalde på metoden i en anden komponet, og så afspille en lyd. 
const LydKlip = [
    {sound: TempleOS, lable: 'Velsign Mig!' }
]

class SoundPlay extends Component {
    SoundPlay = (src) => {
        const sound = new Howl ({

        })
        sound.play();        
    }
    RenderButtonSound = () => {
        return LydKlip.map((soundObj, index) =>{
            return(<button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
                {soundObj.lable}
                </button>
                
            )
        } )
    }

    render() {
        Howler.volume(0.5)
        return <div className="SoundPlay">
        {/* {this.RenderButtonSound()} */}
        </div>;
    }
  }
  export default SoundPlay;