import "./contactUs.css"



const ContactUs = () => {

    return <div className="main-container" id="contact-us">
            <div className="container">
                <label className="contact-us-title">Contact Us</label>
                <div>
                    <label className="contact-us-description">We welcome all inbound enquiries and have appetite across all consumer receivables categories including online consumer lending, energy resellers, utilities, telecom, new fintech categories including payday loans &  BNPL.<br/><br/></label>
                    <label className="contact-us-description">Contact us at <a href="mailto:info@akcp.io">info@akcp.io</a> or call +61 460 686 892</label>
                </div>
                {/* <div className="contact-us-form">
                    <input className="contact-us-form-name-input" placeholder="name"></input>
                    <input className="contact-us-form-email-input" placeholder="email"></input>
                    <input className="contact-us-form-message-input" placeholder="message"></input>
                </div> */}
        </div>
    </div>
};

export default ContactUs;