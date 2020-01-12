import React from 'react';

export default class modal extends React.Component {
    render() {
        return(
         <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="false">
            <div className="modal-dialog modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalScrollableTitle">Результаты поиска</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" id={"modal-body"}>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}