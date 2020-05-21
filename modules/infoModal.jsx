import React from 'react';


const infoModal = (props) => {
    const { onClose } = props; 
    return(
            <div className="modal2">        
                <div className="infoModal">
                    <div className="infoModal__content">
                        <img src="img/TKO.png" className="infoModal__img"/>
                    </div>
                    <div className="infoModal__content">
                        <div className="infoModal__Title">СППР по эксплуатации ТКО для региональных операторов Республики Башкортостан</div>
                        <div className="infoModal__Text">Информационное обеспечение анализа ситуации в сфере обращения с отходами</div>
                        <div className="infoModal__Text">Мониторинг состояния муниципальных образований РБ</div>
                    </div>
                    <span className="close" onClick={onClose}/>
                </div>
            </div>
    );
};

export default infoModal;