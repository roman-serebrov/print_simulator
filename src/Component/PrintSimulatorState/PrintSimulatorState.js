import React from 'react'
import classes from './PrintSimulator.module.scss'
import PrintSimulator from './printSimulator'
import {connect} from "react-redux";
import {checkThunk, setTextThunk} from "../../core/reducer/app_reducer";
import Loader from "../../UI/Loader/Loader";
import {check, checkArray, timerTest} from "../../utils/utils";
import {errArray} from "../../redux/action_type";
class PrintSimulatorState extends React.Component {
    constructor(props) {
        super(props);
        this.counter_id = 1
        this.$el = 0
    }
    componentDidMount() {
        setTimeout(() => {
                this.props.setTextThunk()
            }, 1500)
    }

    changeText(e) {
        const allSelectors = document.querySelectorAll("span")
        let $el = this.$el
        let id = this.counter_id
        let letter = e.target.value
        if(this.$el < allSelectors.length - 1) {
            if(checkArray(allSelectors, $el,  id, letter)) {
                this.$el++
                this.counter_id++
            }else {
                this.props.errLatter.push(id)
            }
        } else {
            document.getElementById('errorsInTest').innerText = 'ошибок ' + this.props.errLatter.length
        }
    }


    render() {
        if(this.props.textLoud) {
            timerTest()()
            return (
                <div className={classes.PrintSimulator}>
                    <h1>
                        Тренажер печати
                    </h1>
                    <div className={classes.printContainer}>
                        <input onChange={event => (this.changeText(event))} autoFocus={true} value={this.props.letter}/>
                        <PrintSimulator text={this.props.text} {...this.props} />
                    </div>
                </div>
            )
        } else {
            return (
                <Loader />
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        okLatter: state.app.okLatter,
        errLatter: state.app.errLatter,
        letter: state.app.letter,
        text: state.app.text,
        textLoud: state.app.textLoud,
    }
}
export default connect(mapStateToProps, {setTextThunk, errArray})(PrintSimulatorState)