import React from 'react';
import $ from "jquery";

export class TabAnalysis extends React.Component {
    constructor(props){
        super(props);
        this.change = this.change.bind(this);
    }

    change(){
            var sel1 = document.getElementById('m1').selectedIndex;
            if (sel1 === 6 || sel1 === 7 || sel1 === 8 || sel1 === 9){
                $("#m2").prop('selectedIndex', 0);
                $('#m2').prop('disabled', 'disabled');
            }
            else
                $('#m2').prop('disabled', false);
    }

    render() {
        return(
            <div className="tab" style={{display: this.props.state ? "block" : "none"}}>
                <label className="lab">Показатель</label>
                <select className="select1 select--right" name="city" id="m1" onChange={this.change}>
                    <option value="Waste_used_">Количество использованных отходов</option>
                    <option value="Waste_used_area_">Количество использованных обезвреженных отходов на 1 кв.км.</option>
                    <option value="Waste_used_population_">Количество использованных обезвреженных отходов на душу населения
                    </option>

                    <option value="Waste_">Количество образованных отходов</option>
                    <option value="Waste_area_">Количество образованных отходов на 1 кв.км.</option>
                    <option value="Waste_population_">Количество образованных отходов на душу населения</option>

                    <option value="Waste_disposal_">Количество захороненных отходов</option>
                    <option value="Waste_disposal_area_">Количество захороненных отходов на 1 кв.км.</option>
                    <option value="Waste_disposal_population_">Количество захороненных отходов на душу населения</option>
                </select>
                <label className="lab">Год</label>
                <select className="select1 select--right" name="city" id="m2">
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                </select>
                <button id="m" className="knopka" onClick={() => this.props.toggleDist()} >Показать</button>
                <button id="mCancel" className="knopka" onClick={() => this.props.clear()}>Убрать слой</button>
            </div>
        )
    }
}