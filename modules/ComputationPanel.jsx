import React from 'react';
import $ from "jquery";
import {dto, dtoun, trop, tropun, dop, dopun, dtr11, dtr22, prD1, prD2, prD3, prD4, tr11, tr22, prostrU1, prostrU2 } from "./Layers";
import {connect} from "react-redux";

class ComputationPanel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addDistrict: false,
            addTransport: false,
            addOpt: false
        };
        this.onComput = this.onComput.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    onComput(){

        if(this.state.addTransport && this.state.addDistrict && this.state.addOpt){
            dto.setVisible(true);
            dtoun.setVisible(true);
            $("#leg1").attr("src","img/ana.png");
        }
        else if(this.state.addTransport && this.state.addOpt && !this.state.addDistrict){
            trop.setVisible(true);
            tropun.setVisible(true);
            $("#leg1").attr("src","img/distr2.png");
        }
        else if(this.state.addDistrict && this.state.addOpt && !this.state.addTransport){
            dop.setVisible(true);
            dopun.setVisible(true);
            $("#leg1").attr("src","img/distr2.png");
        }
        else if(this.state.addDistrict && !this.state.addOpt && this.state.addTransport){
            dtr11.setVisible(true);
            dtr22.setVisible(true);
            $("#leg1").attr("src","img/distr2.png");
        }

        else if(this.state.addDistrict && !this.state.addOpt && !this.state.addTransport){
            prD1.setVisible(true);
            prD2.setVisible(true);
            prD3.setVisible(true);
            prD4.setVisible(true);
            $("#leg1").attr("src","img/ana.png");
        }

        else if(!this.state.addDistrict && !this.state.addOpt && this.state.addTransport){
            tr11.setVisible(true);
            tr22.setVisible(true);
            $("#leg1").attr("src","img/distr2.png");
        }

        else if(!this.state.addDistrict && this.state.addOpt && !this.state.addTransport){
            prostrU1.setVisible(true);
            prostrU2.setVisible(true);
            $("#leg1").attr("src","img/distr2.png");

        }

    }
    onClear(){
        dto.setVisible(false);
        dtoun.setVisible(false);
        trop.setVisible(false);
        tropun.setVisible(false);
        dop.setVisible(false);
        dopun.setVisible(false);
        dtr11.setVisible(false);
        dtr22.setVisible(false);
        prD1.setVisible(false);
        prD2.setVisible(false);
        prD3.setVisible(false);
        prD4.setVisible(false);
        tr11.setVisible(false);
        tr22.setVisible(false);
        prostrU1.setVisible(false);
        prostrU2.setVisible(false);
        $("#leg1").attr("src","img/legendAll.png");
    }

    render() {
        return(
            <div className="panel2" style={{display: this.props.panels.isComputationPanelOn ? "block" : "none"}}>
                <div className="form-check">
                    <label>
                        <input id="addDistrict" type="checkbox" defaultChecked={this.state.addDistrict} onChange={() => this.setState(state => ({addDistrict: !state.addDistrict}))} name="check"/><span className="label-text">Анализ состояния муниципальных образований</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addTransport" type="checkbox" defaultChecked={this.state.addTransport} name="check" onChange={() => this.setState(state => ({addTransport: !state.addTransport}))}/> <span className="label-text">Зоны поставок на железнодорожные станции</span>
                    </label>
                </div>
                <div className="form-check">
                    <label>
                        <input id="addOpt" type="checkbox" defaultChecked={this.state.addOpt} name="check" onChange={() => this.setState(state => ({addOpt: !state.addOpt}))}/> <span className="label-text">Учет природно-территориальных условий</span>
                    </label>
                </div>
                <label style={{display: this.props.layers.isComputationLayersAreReady ? "none" : "block"}}><span className="label-text">Ждите...</span></label>
                <button className="knopka" onClick={this.onComput} disabled={!this.props.layers.isComputationLayersAreReady}>Рассчитать</button>
                <button className="knopka" onClick={this.onClear}>Убрать</button>
            </div>
        )
    }
}
const mapStateToProps = function(store) {
    return {
        panels: store.panelsSwitchState,
        layers: store.layersPanelState
    };
};
export default connect(mapStateToProps)(ComputationPanel);
