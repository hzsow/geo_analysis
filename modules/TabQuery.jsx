import React from 'react';
import { connect } from 'react-redux';
import {distSource, tkoSource} from './LayersPanel';
import ol from "openlayers";



export class TabQuery extends React.Component {
    constructor(props){
        super(props);
        this.onFiltrOne = this.onFiltrOne.bind(this);
        this.onFiltrTwo = this.onFiltrTwo.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    onFiltrOne(){
        let sel=document.getElementById('sql3').selectedIndex;
        let options=document.getElementById('sql3').options;
        let sel1=document.getElementById('sql1').selectedIndex;
        let options1=document.getElementById('sql1').options;
        let sel2=document.getElementById('sqlYEAR').selectedIndex;
        let options2=document.getElementById('sqlYEAR').options;
        let value=document.getElementById('sql4').value;
        let features = distSource.getFeatures();

        let que = options1[sel1].value + options2[sel2].value;

        console.log(que);

        for (let i = 0; i < features.length; i++) {
            let c = features[i].get(que);
            features[i].setStyle(new ol.style.Style({}));
            if (options[sel].value === "0"){
                if (c > value)
                    features[i].setStyle(null);
            }
            else if (options[sel].value === "1"){
                if (c < value)
                    features[i].setStyle(null);
            }
            else if (options[sel].value === "2"){
                if (c === value)
                    features[i].setStyle(null);
            }
        }
    }
    cancel(){
        let features = this.props.state2 ? distSource.getFeatures() : tkoSource.getFeatures();
        for (let i = 0; i < features.length; i++)
            features[i].setStyle(null);
    }
    onFiltrTwo(){

        let sel2 = document.getElementById('tsql2').selectedIndex;
        let value = document.getElementById('tsql4').value;
        let features = tkoSource.getFeatures();


        for (let i = 0; i < features.length; i++)
            features[i].setStyle(null);

        for (let i = 0; i < features.length; i++) {
            let c = features[i].get("name_purpo");
            let c1 = features[i].get("year_explu");
            features[i].setStyle(new ol.style.Style({}));

            if (sel2 === 1){
                if (c === "захоронение")
                    features[i].setStyle(null);
            } else if (sel2 === 2) {
                if (c === "хранение сроком до 3 лет")
                    features[i].setStyle(null);
            } else if (sel2 === 3) {
                if (c === "хранение сроком более 3 лет")
                    features[i].setStyle(null);
            }
            else
                features[i].setStyle(null);
            if (value!==""){
                if (c1 !== value)
                    features[i].setStyle(new ol.style.Style({}));
            }
        }

    }
    render() {
        return(
            <div className="tab" style={{display: this.props.state ? "block" : "none"}}>
                <div className="dists" style={{display: this.props.state2 ? "block" : "none"}}>
                    <label className="lab">Показатель</label>
                    <select className="select1 select--right" name="city" id="sql1">

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
                    <select className="select1 select--right" name="city" id="sqlYEAR">
                        <option value="15" selected>2015</option>
                        <option value="16">2016</option>
                    </select>
                    <label className="lab">Оператор</label>
                    <select className="select1 select--right" name="city" id="sql3">
                        <option value="0">Больше</option>
                        <option value="1">Меньше</option>
                        <option value="2">Равно</option>
                    </select>
                    <label className="lab">Значение</label>
                    <input className="input" type="text" name="input" id="sql4"/>
                </div>
                <div className="tbos" style={{display: this.props.state2 ? "none" : "block"}}>
                    <label className="lab">Срок хранения</label>
                    <select className="select1 select--right" name="city" id="tsql2">
                        <option value="0">Все</option>
                        <option value="1">Захоронение</option>
                        <option value="1">Хранение сроком до 3 лет</option>
                        <option value="1">Хранение сроком более 3 лет</option>
                    </select>
                    <label className="lab">Год эксплуатации</label>
                    <input className="input" type="text" name="input" id="tsql4"/>
                </div>

                <button  onClick={this.props.state2 ? this.onFiltrOne : this.onFiltrTwo} className="knopka">Показать</button>
                <button  onClick={this.cancel} className="knopka">Отменить</button>
            </div>
        )
    }
}