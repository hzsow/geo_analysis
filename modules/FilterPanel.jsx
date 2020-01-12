import React from 'react';
import { connect } from 'react-redux';
import {distSource, tkoSource} from './Layers';
import ol from "openlayers";



class FilterPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        valueOne: "W_",
        valueTwo: "15",
        valueThree: "0",
        valueFour: "0",
        inputOne: "",
        inputTwo: ""
        };
        this.onFilterOne = this.onFilterOne.bind(this);
        this.onFilterTwo = this.onFilterTwo.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    onFilterOne(){
        let features = distSource.getFeatures();
        let que = this.state.valueOne.concat(this.state.valueTwo);
        console.log(que);
        for (let i = 0; i < features.length; i++) {
            let c = features[i].get(que);
            features[i].setStyle(new ol.style.Style({}));

            if (this.state.valueThree === "0"){
                if (c > this.state.inputOne)
                    features[i].setStyle(null);
            }
            else if (this.state.valueThree === "1"){
                if (c < this.state.inputOne)
                    features[i].setStyle(null);
            }
            else if (this.state.valueThree === "2"){
                if (c === this.state.inputOne)
                    features[i].setStyle(null);
            }
        }
    }
    cancel(){
        let features = this.props.panels.isFilterPanelDISTTKO ? distSource.getFeatures() : tkoSource.getFeatures();
        for (let i = 0; i < features.length; i++)
            features[i].setStyle(null);
    }

    onFilterTwo(){
        let features = tkoSource.getFeatures();

        for (let i = 0; i < features.length; i++)
            features[i].setStyle(null);

        for (let i = 0; i < features.length; i++) {
            let c = features[i].get("name_purpo");
            let c1 = features[i].get("year_explu");

            features[i].setStyle(new ol.style.Style({}));

            if (this.state.valueFour === "0"){
                if (c === "захоронение")
                    features[i].setStyle(null);
            } else if (this.state.valueFour === "1") {
                if (c === "хранение сроком до 3 лет")
                    features[i].setStyle(null);
            } else if (this.state.valueFour === "2") {
                if (c === "хранение сроком более 3 лет")
                    features[i].setStyle(null);
            }
            else
                features[i].setStyle(null);

            if (this.state.inputTwo !== ""){
                if (c1 !== this.state.inputTwo)
                    features[i].setStyle(new ol.style.Style({}));
            }
        }
    }

    render() {
        return(
            <div className="tab" style={{display: this.props.panels.isFilterPanel ? "block" : "none"}}>
                <div style={{display: this.props.panels.isFilterPanelDISTTKO ? "block" : "none"}}>
                    <label className="lab">Показатель</label>
                    <select className="select1 select--right" value={this.state.valueOne} onChange={(e) => this.setState({valueOne: e.target.value})}>

                        <option value="W_">Количество образованных отходов, тонн</option>
                        <option value="W_a_">Количество образованных отходов на 1 кв.км.</option>
                        <option value="W_p_">Количество образованных отходов на душу населения</option>

                        <option value="W_u_">Количество использованных и обезвреженных отходов, тонн</option>
                        <option value="W_u_a_">Количество использованных и обезвреженных отходов на 1 кв.км.
                        </option>
                        <option value="W_u_p_">Количество использованных и обезвреженных отходов на душу
                            населения
                        </option>

                        <option value="W_d_">Количество захороненных отходов, тонн</option>
                        <option value="W_d_a_">Количество захороненных отходов на 1 кв.км.</option>
                        <option value="W_d_p_">Количество захороненных отходов на душу населения
                        </option>

                        <option value="Cont_">Количество контейнеров для сбора ТКО, шт</option>
                        <option value="Pol_TK_">Количество полигонов ТКО, шт</option>
                        <option value="MSS">Количество мусоросортировочных станций, шт</option>
                    </select>
                    <label className="lab">Год</label>
                    <select className="select1 select--right" value={this.state.valueTwo} onChange={(e) => this.setState({valueTwo: e.target.value})}>
                        <option value="15">2015</option>
                        <option value="16">2016</option>
                    </select>
                    <label className="lab">Оператор</label>
                    <select className="select1 select--right" value={this.state.valueThree} onChange={(e) => this.setState({valueThree: e.target.value})}>
                        <option value="0">Больше</option>
                        <option value="1">Меньше</option>
                        <option value="2">Равно</option>
                    </select>
                    <label className="lab">Значение</label>
                    <input className="input" type="text" name="input" value={this.state.inputOne} onChange={(e) => this.setState({inputOne: e.target.value})}/>
                </div>

                <div style={{display: this.props.panels.isFilterPanelDISTTKO ? "none" : "block"}}>
                    <label className="lab">Срок хранения</label>
                    <select className="select1 select--right" value={this.state.valueFour} onChange={(e) => this.setState({valueFour: e.target.value})}>
                        <option value="0">Все</option>
                        <option value="1">Захоронение</option>
                        <option value="2">Хранение сроком до 3 лет</option>
                        <option value="3">Хранение сроком более 3 лет</option>
                    </select>
                    <label className="lab">Год эксплуатации</label>
                    <input className="input" type="text" name="input" value={this.state.inputTwo} onChange={(e) => this.setState({inputTwo: e.target.value})}/>
                </div>

                <button  onClick={this.props.panels.isFilterPanelDISTTKO ? this.onFilterOne : this.onFilterTwo} className="knopka">Показать</button>
                <button  onClick={this.cancel} className="knopka">Отменить</button>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        panels: store.panelsSwitchState
    };
};
export default connect(mapStateToProps)(FilterPanel);
