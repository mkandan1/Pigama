import React, { Component } from 'react'
import './articles.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import config from '../../../config';
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Header from '../../essentials/Header';
import '../../../assets/Video/vadivel.mp4'

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

var script2 = document.createElement('script');
script2.src = '//availablesyrup.com/8f/bd/d0/8fbdd0bc94b865de3c277cad8b290033.js';
document.body.appendChild(script2);

class VideoEditingTips extends Component {
    state = {
        countFromSecond: 12,
        timerId: 0,
        status: 'Start',
        ad1: false,
        uid: 0,
        load: false
    };

    constructor(props) {
        super(props)
        this.creditAmount = this.creditAmount.bind(this)
    }

    componentWillMount() {



        const auth = getAuth(config);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                this.setState({
                    uid: uid
                })
            }
        })




        var head = document.getElementsByTagName('head')[0];
        var script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.src = '//availablesyrup.com/24/61/b8/2461b8aebe7eec0e2f3d7e21ae4ff82d.js';
        head.appendChild(script1);


      


     

    }


    creditAmount(ad1) {

        const auth = getAuth(config);
        onAuthStateChanged(auth, (user) => {
            const uid = user.uid;
            const creditAmount = 0.08

            const data = { uid: uid, creditAmount: creditAmount }

            fetch(`${process.env.REACT_APP_API_LINK}/updateBalance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                return res.json()
            }).then((data) => {
                if (data.result === 'ok') {
                    this.setState({
                        ad6: false
                    })
                    document.getElementById('result').innerText = "Balance updated"
                    document.getElementById('result').style.color = 'green'
                }
            }).catch((err) => {
                console.log(err);
            })
        })
    }

    // TODO: use the requestAnimationFrame
    startTimer = (ad) => {
        if (ad === 'ad1') {
            const timerId = setInterval(() => {
                const {
                    state: { countFromSecond: seconds }
                } = this;

                if (seconds > 0) {
                    this.setState({
                        countFromSecond: seconds - 1,
                        status: 'Wait for '

                    });
                } else {
                    this.setState({
                        countFromSecond: 12,
                        timerId: 0,
                        ad1: true
                    })
                    clearInterval(this.state.timerId);
                }
            }, 1000);

            this.setState({
                timerId
            });
        }

    };

    render() {

        const meta = {
            title: 'Video Editing Beginners Tutorial 2022',
            description: 'Video editing tutorial for beginners 2022. Get advanced in editing editing by following our tutorial',
            canonical: 'http://pigama.looficats.com/article/video-editing-beginners',
            meta: {
                charset: 'utf-8',
                name: {
                    keywords: 'video editing 2022, wondershare, vfx, beginners tutorial, video editing for beginners'
                }
            }
        };



        return (
            <DocumentMeta {...meta}>
                <Header />
                <div className='container mt-5'>
                    {/* Title */}
                    <div>
                        <h1>Video Editing Tips</h1>
                        <span className='mt-2'><b>Published on:</b> 12-12-2022</span><span className='mt-2 d-block'><b>Author:</b> Looficats</span>
                    </div>

                    <div className='section__1 mt-5'>

                        <p>
                            There’s no one way to edit videos. Your approach will depend on your project and your creative preferences—but there are a few tried and true strategies that can streamline your workflow and, hopefully, spare you from having to learn the hard way. Here are 11 worth considering:
                            Organize your footage. “You have to be organized,” says Tiffani Bauer, video producer at Descript. “Starting off by organizing your stuff straight out of the camera is great.” Keeping your video clips in order will allow you to quickly find the pieces you need when you need them. Decide on a management strategy and file structure, and keep it consistent. Create folders for your project on your device and make subfolders for your raw clips depending on their type, or where they belong in your edit.
                            Make a plan. It doesn’t have to be overly elaborate, but you should have a good idea about what your project will look and sound like. Create an outline of your vision, or better yet, make a shot list detailing the visual and the audio components of every scene. If you want to include voice over or narration, write a script by outlining the points you want to make, then writing them out to sound natural. Read it out, make adjustments, and repeat until it sounds right. Keep your writing concise, and make sure that whoever is reading the script practices in advance.
                        </p>



                        {/* <video id="vide-ad">
                            <source src={'../../../assets/Video/vadivel.mp4'} type="video/mp4" />
                        </video> */}

                        <p> Read it out, make adjustments, and repeat until it sounds right. Keep your writing concise, and make sure that whoever is reading the script practices in advance.
                            Choose clips that show important action. Trim clips to include only the parts you need. Ask yourself: What does my story need? “You don’t have to keep everything,” says Tiffani. “If it’s not working in the edit, feel free to drop it.” It’s normal to be precious about your footage, especially if it took a lot of work to record, but a good editor can make tough choices for the sake of the overall project.
                        </p>

                        <div id="container-1f9fba3a4c42eeba308fbf4563eb0668"></div>

                        {(this.state.uid !== 0) ? <span>
                            <div className='d-flex justify-content-center mt-2'>
                                {(this.state.ad1) ? <button className='btn btn-primary'>Watched</button> : <button onClick={() => this.startTimer('ad1')} className='btn btn-primary'>{this.state.status} <span>{this.state.countFromSecond}</span></button>}
                            </div>


                            <div className='mt-5 d-flex justify-content-center mb-5'>
                                {(this.state.ad1) ? <button className='btn btn-primary' onClick={() => this.creditAmount(this.state.ad1)}>I watched all ads</button> : <button className='btn btn-primary disabled'>Watch All Ads</button>}
                            </div>

                            <div id='result' className='d-block justify-content-center'></div>
                            <div className='d-flex justify-content-center'>
                                {(this.state.uid !== 0) ? <Link to={`/myAccount/${this.state.uid}`}>Check Balance</Link> : <p>Please sign in to proceed</p>}
                            </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <button onClick={() => window.location.href = '/article/video-editing-2022'} className='btn btn-primary mb-1'>Next Page</button>
                            </div>
                        </span> : <p></p>}
                    </div>

                </div>
            </DocumentMeta>
        )
    }
}



export default VideoEditingTips
