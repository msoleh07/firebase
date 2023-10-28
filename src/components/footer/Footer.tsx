import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="container px-4 py-5" id="icon-grid">
            <h2 className="pb-2 border-bottom">Footer </h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
                <div className="col d-flex align-items-start">
                    
                    <div>
                        <a href="/" style={{ textDecoration: 'none' }}><h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Home</h3></a>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    
                    <div>
                        <a href="/" style={{ textDecoration: 'none' }}><h3 className="fw-bold mb-0 fs-4 text-body-emphasis">About</h3></a>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                <div className="col d-flex align-items-start">
                    
                    <div>
                        <a href="/" style={{ textDecoration: 'none' }}><h3 className="fw-bold mb-0 fs-4 text-body-emphasis link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Services</h3></a>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer