import { LightningElement, api, track } from 'lwc';
import { getSession } from '../../data/sessionService/sessionService'

export default class sessionDetails extends LightningElement {
    @track session // both @track and @api are reactive: When their value changes, the component automatic rendered
    @api // Define session as public
    set sessionId(id) {
        this._sessionId = id;
        this.session = getSession(id);
    }
    get sessionId() {
        return this._sessionId;
    }
}
