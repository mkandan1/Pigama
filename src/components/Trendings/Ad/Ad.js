import React, { Component } from 'react'

let script = document.createElement('script')
script.type = "text/javascript";
script.innerHTML = `atOptions = {
'key' : 'af0d679c230c081da37cf2a31cbd2afc',
'format' : 'iframe',
'height' : 60,
'width' : 468,
'params' : {}
};
document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplayformat.com/af0d679c230c081da37cf2a31cbd2afc/invoke.js"></scr' + 'ipt>');`

document.body.appendChild(script)

class Ad extends Component {

    render() {
        return (
            <div>Ad</div>
        )
    }
}
export default Ad
