import { AKCPLogo } from '../head';
import './footer.css'
import linkedin from "../../../images/icons-ui-social-linked-in.webp"

const Footer = () => {

    return <div className='footer-container'>
            <div className="footer-wrapper">
                <AKCPLogo className='akcp-logo-footer'/>
                <div className="footer-linkes">
                    <a href='#about-us'><label>ABOUT US</label></a>
                    <a href='our-team'><label>OUR TEAM</label></a>
                    <a href='#contact-us'><label>CONTACT US</label></a>
                </div>
                <img className='footer-linked-in-logo' src={linkedin} alt='Arborknot linkedin icon'/>
        </div>
        <label className='footer-rights-label'>© 2022 AKCP ・ All right reserved</label>
    </div>
}

export default Footer;