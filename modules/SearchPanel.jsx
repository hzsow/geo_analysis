import React from 'react';
import {map} from './Layers.jsx'
import $ from "jquery";

export class SearchPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input_value: ""
        };

        this.itemExists = this.itemExists.bind(this);
        this.trimString = this.trimString.bind(this);
        this.compareObjects = this.compareObjects.bind(this);
        this.searchFor = this.searchFor.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    trimString(s) {
        let l=0, r=s.length -1;
        while(l < s.length && s[l] === ' ') l++;
        while(r > l && s[r] === ' ') r-=1;
        return s.substring(l, r+1);
    }

    compareObjects(o1, o2) {
        let k = '';
        for(k in o1) if(o1[k] !== o2[k]) return false;
        for(k in o2) if(o1[k] !== o2[k]) return false;
        return true;
    }

    itemExists(haystack, needle) {
        for(let i=0; i<haystack.length; i++) if(this.compareObjects(haystack[i], needle)) return true;
        return false;
    }

    searchFor(toSearch) {
        let results = [];
        let sel = document.getElementById('inputGroupSelect04').selectedIndex;
        let options = document.getElementById('inputGroupSelect04').options;

        if ((options[sel].value === "1") || (options[sel].value === "0")){
            $.ajax({
                url: 'http://localhost:3978/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite%3Amss&maxFeatures=70&outputFormat=application%2Fjson',
                dataType: 'json',
                async: false,
                success: (data) => {
                    let len = data.features.length;
                    toSearch = this.trimString(toSearch.toLowerCase());
                    for(let i=0; i<len; i++) {
                        if(data['features'][i]['properties']['Organizati'].toString().toLowerCase().indexOf(toSearch)!==-1) {
                            if(!this.itemExists(results, data['features'][i]['properties']['Organizati'])) {
                                let r = new Array(4);
                                r[0] = data['features'][i]['properties']['Organizati'];
                                r[1] = data['features'][i]['properties']['Address'];
                                r[2] = data['features'][i]['properties']['Dolgota'];
                                r[3] = data['features'][i]['properties']['Shirota'];
                                results.push(r);
                            }
                        }
                    }
                }
            });
        }
        if ((options[sel].value === "2") || (options[sel].value === "0")){
            $.ajax({
                url: 'http://localhost:8080/geoserver/cite/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cite%3AWasteObject&maxFeatures=70&outputFormat=application%2Fjson',
                dataType: 'json',
                async: false,
                success: (data) => {
                    let len = data.features.length;
                    toSearch = this.trimString(toSearch.toLowerCase());
                    for(let i=0; i<len; i++) {
                        if(data['features'][i]['properties']['name_'].toString().toLowerCase().indexOf(toSearch)!==-1) {
                            if(!this.itemExists(results, data['features'][i]['properties']['name_'])) {
                                let r = new Array(4);
                                r[0] = data['features'][i]['properties']['name_'];
                                r[1] = data['features'][i]['properties']['address'];
                                r[2] = data['features'][i]['properties']['longitude'];
                                r[3] = data['features'][i]['properties']['latitude'];
                                results.push(r);
                            }
                        }
                    }
                }
            });
        }
        return results;
    }

    handleChange(event) {
        this.setState({input_value: event.target.value});
    }

    onSearch(){
        $(".modal-backdrop").remove();
        $('.resDiv').remove();

        let results = this.searchFor(this.state.input_value);


        for (let i = 0; i < results.length; i++) {
            let div = document.createElement('div');
            div.setAttribute("id", i);
            div.className = "resDiv";
            div.innerHTML = results[i][0];
            div.onclick = function () {
                let coords = ol.proj.fromLonLat([results[i][2], results[i][3]]);
                map.getView().animate({center: coords, zoom: 10});
            };
            document.getElementById("modal-body").appendChild(div);
        }
    }

    render() {
        return(
            <div id={"search-panel"}>
                    <div className="input-group">
                        <select className="custom-select" id="inputGroupSelect04"
                                aria-label="">
                            <option value="0">Все</option>
                            <option value="1">Мусоросортировочные станции</option>
                            <option value="2">Полигоны ТКО</option>
                        </select>
                        <input type="text" className="form-control" placeholder="Я ищу..." value={this.state.input_value} onChange={this.handleChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-info" type="button" data-toggle="modal" data-target="#exampleModalScrollable" onClick={this.onSearch}>Искать</button>
                        </div>
                    </div>
            </div>
        )
    }
}