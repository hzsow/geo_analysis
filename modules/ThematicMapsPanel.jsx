import React from 'react';
import $ from "jquery";
import {connect} from "react-redux";
import {map} from "./Layers";
import {distWASTE, distWASTEJSONSource} from "./Layers";
import * as actions from "../actions/actions-tab-analysis";

class ThematicMapsPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wasteLayerOn: false,
            selectOneValue: "Waste_used_",
            selectTwoValue: "2015"
        };
        this.change = this.change.bind(this);
        this.onShow = this.onShow.bind(this);
        this.onClear = this.onClear.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onShow() {
        console.log(this.state.selectOneValue.concat(this.state.selectTwoValue));

        if(!this.state.wasteLayerOn) {
            distWASTE.setVisible(true);
            this.setState(state =>({wasteLayerOn: !this.state.wasteLayerOn}));
        }
        else{
            distWASTEJSONSource.changed();
        }
    }

    onClear() {
        if(this.state.wasteLayerOn) {
            distWASTE.setVisible(false);
            this.setState(state =>({wasteLayerOn: !this.state.wasteLayerOn}));
            $("#leg1").attr("src", "img/legendAll.png");
        }
    }

    change(e){
        this.setState({selectOneValue: e.target.value},
            () => this.props.dispatch(actions.query(this.state.selectOneValue.concat(this.state.selectTwoValue))));
        let sel1 = e.target.selectedIndex;
        this.props.dispatch(actions.selectedOne(sel1));

        if (sel1 === 6 || sel1 === 7 || sel1 === 8 || sel1 === 9){
            $("#m2").prop('selectedIndex', 0);
            $('#m2').prop('disabled', 'disabled');
        }
        else
            $('#m2').prop('disabled', false);

    }
    handleChange(e){
        this.setState({selectTwoValue: e.target.value},
            () => this.props.dispatch(actions.query(this.state.selectOneValue.concat(this.state.selectTwoValue))));
        this.props.dispatch(actions.selectedTwo(e.target.selectedIndex));

        }
    render() {
        return(
            <div className="tab" style={{display: this.props.panels.isThematicMapsOn ? "block" : "none"}}>
                <label className="lab">Показатель</label>
                <select className="select1 select--right" value={this.state.selectOneValue} onChange={this.change} >
                    <option value="Waste_used_">Количество использованных отходов</option>
                    <option value="Waste_used_area_">Количество использованных обезвреженных отходов на 1 кв.км.</option>
                    <option value="Waste_used_population_">Количество использованных обезвреженных отходов на душу населения</option>

                    <option value="Waste_">Количество образованных отходов</option>
                    <option value="Waste_area_">Количество образованных отходов на 1 кв.км.</option>
                    <option value="Waste_population_">Количество образованных отходов на душу населения</option>

                    <option value="Waste_disposal_">Количество захороненных отходов</option>
                    <option value="Waste_disposal_area_">Количество захороненных отходов на 1 кв.км.</option>
                    <option value="Waste_disposal_population_">Количество захороненных отходов на душу населения</option>
                </select>
                <label className="lab">Год</label>
                <select className="select1 select--right" id={"m2"} value={this.state.selectTwoValue} onChange={this.handleChange}>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                </select>
                <button id="m" className="knopka" onClick={this.onShow} >Показать</button>
                <button id="mCancel" className="knopka" onClick={this.onClear}>Убрать слой</button>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        panels: store.panelsSwitchState
    };
};
export default connect(mapStateToProps)(ThematicMapsPanel);
