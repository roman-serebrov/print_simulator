import React from 'react'
import classes from './PrintSimulator.module.scss'
import RenderText from "./RenderText";
const printSimulator = props => {
    return (
        <div className={classes.printBlock}>
            <div className={classes.mainText}>
                <RenderText text={props.text} {...props}/>
            </div>
            <div id='setTime'>
            </div>
            <div id='setTime2'>
            </div>
            <div id='errorsInTest'>
            </div>
        </div>
    )
}
export default printSimulator