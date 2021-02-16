import React from 'react'
import classes from '../Component/PrintSimulatorState/PrintSimulator.module.scss'

export function renderText(array) {
    return array.map((i, index) => {
        return(
            <span
                id={index + 1}
                key={index}
            >
                {i}
            </span>
        )
    })
}

export function checkArray(array, elArray, id, letter) {
    if (array[elArray].textContent === letter) {
        document.getElementById(String(id)).style.background = 'green'
        return true
    } else {
        document.getElementById(String(id)).style.background = 'red'
    }
}

export function timerTest() {
    return function(){
        let sec = '00', min = '00'
        setInterval(() => {
            sec = +sec + 1
            if(sec === 60) {
                sec = '00'
                min = +min + 1
            }

            document.getElementById('setTime').innerText = min + ':'+sec
        },1000)
    }
}