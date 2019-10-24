import React from 'react';
import Result from "./components/result/Result"
import Keypad from './components/keypad/Keypad';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: "",
        }
    }

    btn_handler = (btn) => {
        if (btn === "C"){
            this.reset();
        }
        else if (btn === "=") {
            let totalResult = eval(this.state.result);
            this.setState({
                result: totalResult
            })
        }
        else {
            this.setState({
                result: this.state.result + btn
            })
        }
    }

    reset = () => {
        this.setState({
            result: ""
        });
    }

    render() {
        return (
            <div>
                <div className="calculator">
                    <Result result={this.state.result} />
                    <Keypad btnHandler={this.btn_handler} />
                </div>
            </div>
        )
    }
}

export default App;