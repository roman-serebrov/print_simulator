import React from 'react'
import {errArray} from "../redux/action_type";
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

export const checkArray = (array, elArray, id, letter) => (dispatch) => {

    const $el = document.getElementById(id).textContent
    if($el === letter && array.length -1 === elArray) {
        document.getElementById(String(id)).style.background = 'green'
        return false
    } else if($el === letter) {
        document.getElementById(String(id)).style.background = 'green'
        return true
    }
    else  {
        dispatch(errArray($el))
        document.getElementById(String(id)).style.background = 'red'
    }
 }


export function timerTest() {
        let sec = '00', min = '00'
      return setInterval(() => {
            sec = +sec + 1
            if(sec === 60) {
                sec = '00'
                min = +min + 1
            }
            document.getElementById('setTime').innerText = min + ':'+sec
        },1000)
    }
