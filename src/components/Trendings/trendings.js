import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class trendins extends Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center mt-5'>
        <di className="mb-3 d-block">
          <h3>Articles</h3>
        </di>
        <div className='ratio ratio-16x9'>
          <iframe src='/ad' width='1200px' title='ad7'>
          </iframe></div>
        <div className="card mb-3" style={{ maxWidth: 540 + 'px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className="img-fluid rounded-start" alt="Video editing" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Video Editing</h5>
                <p className="card-text">Think of this post as your uber-brief but thorough guide to everything you need to know about video editing. We’ll talk about putting together a script, adding the right kind of audio, formatting your video like a pro, and so much more. Let’s dive in.</p>
                <Link to='/article/video-editing-beginners' className='btn btn-warning'>Read</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='ratio ratio-16x9'>
          <iframe src='/ad' width='1200px' title='ad8'>
          </iframe>
        </div>
      </div>
    )
  }
}

export default trendins