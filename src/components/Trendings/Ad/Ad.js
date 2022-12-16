import React, { Component } from 'react'

let script = document.createElement('script')
script.type = "text/javascript";
script.innerHTML = `atOptions = {
'key' : '4f42d559bbfacff88b0a0d6706a97898',
'format' : 'iframe',
'height' : 250,
'width' : 300,
'params' : {}
};
document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.profitabledisplayformat.com/4f42d559bbfacff88b0a0d6706a97898/invoke.js"></scr' + 'ipt>');`

document.body.appendChild(script)

class Ad extends Component {

    
}
export default Ad
