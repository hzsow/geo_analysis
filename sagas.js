import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'



function* mySaga() {
    yield takeEvery("TOGGLE_LEGEND", () => console.log("ептить"));
}


export default mySaga;