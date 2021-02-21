import React from 'react'
import classes from './PrintSimulator.module.scss'
import PrintSimulator from './printSimulator'
import {connect} from "react-redux";
import {setTextThunk} from "../../core/reducer/app_reducer";
import Loader from "../../UI/Loader/Loader";
import {checkArray} from "../../utils/utils";
class PrintSimulatorState extends React.Component {
    constructor(props) {
        super(props);
        this.counter_id = 1
        this.$el = 0
    }
  async  componentDidMount() {
      await setTimeout(() => {
          this.props.setTextThunk()
      }, 0)
      this.intervalId = await this.props.timerTest()
      console.log(this.intervalId);
  }

    changeText(e) {
        const allSelectors = document.querySelectorAll("span")
        let $el = this.$el
        let id = this.counter_id
        let letter = e.target.value
        console.log()
        if(this.props.checkArray(allSelectors, $el, id, letter)) {
                this.$el++
                this.counter_id ++
            }
            else if (allSelectors.length - 1 === $el) {
                clearInterval(this.intervalId)
                document.getElementById('errorsInTest').innerText = 'ошибок ' + this.props.errLatter.length
        }
        }


    render() {
        if(this.props.textLoud) {
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
        timerTest: state.app.timerTest
    }
}
export default connect(mapStateToProps, {setTextThunk, checkArray})(PrintSimulatorState)