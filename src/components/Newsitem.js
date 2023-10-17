import React from 'react'

const Newsitem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <img src={!imgUrl ? "https://indiamap360.com/img/0/india-flag-map.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}
                        <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success">{source}</span></h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Explore with Tea</a>
                </div>
            </div>
        </div>
    )
}


export default Newsitem