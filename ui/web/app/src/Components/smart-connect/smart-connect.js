import React, {
    Component
} from 'react';

export default class SmartConnect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            server: props.server,
            port: props.port,
            tenant: props.tenant,
            flow: props.flow,
            flowEvent: props.flowEvent,
            sessionId: '',
            group: '',
            query: '',
            sortBy: '',
            pageNumber: 1,
            pageSize: 20,
            ascending: false,
            searchResult: {},
        }
        console.log('In Constructor');
        console.log(this.state);
    }

    componentDidMount() {
        this._computeURL();
    }

    _computeURL = () => {
        var computedUrl = "https://" + this.state.server + ":" + this.state.port + "/";
        computedUrl += this.state.tenant + "/" + this.state.flow + "/" + this.state.flowEvent;

        return computedUrl;
    }

    _postMethod(payload) {
        var url = this._computeURL();
        var id = localStorage.getItem('sessionId');
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Session-Id': id
            },
            body: JSON.stringify(payload)
        }
        console.log(url, req)
        return new Promise((resolve, reject) => {

            fetch(url, req)
                .then((res) => {
                    resolve(res)
                    console.log(res);
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    authenticate(username, password) {
        var url = 'http://' + this.state.server + ':' + this.state.port + '/' + this.state.tenant + '/Security/Authenticate';
        var pay = {
            "identity": username,
            "password": password,
            "type": "custom",
            "FlowAdmin": {
                "___smart_action___": "lookup",
                "___smart_value___": "Security"
            }
        }
        const req = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pay)
        }
        fetch(url, req)
            .then(res => res.json()
                .then((resp) => {
                    var id = (resp.responses[0].sessionId);
                    console.log(id);
                    localStorage.clear();
                    localStorage.setItem('sessionId', id);
                    return "success";
                })
                .catch(err => {
                    console.log(err)
                    return "fail";
                }))
    };

    render() {
        return ( 
            <p>{''}</p>
        )
    }
}