import './aboutUs.css'
import timImage from "../../../images/tim.jpg"
import markImage from "../../../images/mark.jpg"

import linkedin from "../../../images/linked-in.webp"



const ABOUT_US_TEXT_1 = `Founded in 2020, ArborKnot Capital Partners or AKCP is a 100% wholly owned subsidiary of ArborKnot Ltd. The company has
quickly established itself as a key partner to established Debt Buyers & Suppliers across the consumer receivables marketplace offering specialised
capital solutions. We take a tested approach to buying, applying both AI and ML to our underwriting practice and leverage off the application of digital
first communication tactics employed by a network of pre-approved debt servicers.`

const ABOUT_US_TEXT_2 = `The group aims to retain a strong risk mitigated strategy to it’s buying program and aims to ultimately offer institutional grade purpose driven opportunistic alternative credit investment programs to sophisticated investors. 
Most importantly, we strive for enduring relationships that nurture long term partnership arrangements that motivate repeat business while always operating with a social conscious and abiding by customer first principles.`

const TIM_DESCRIPTION = `Tim has over 13 years’ experience in corporate, transaction, advisory and board, commercial and legal roles. Commencing his career at…`
const MARK_DESCRIPTION = `Prior to joining ArborKnot, Mark spent 19 years in various Banking roles with both Citibank and J.P. Morgan across Tel Aviv, Sydney &…`

const AboutUs = () => {

    return <div className="about-us" id="about-us">
        <label className='about-us-title'>About Us</label>
        <div style={{marginBottom: "80px"}}>
            <label className='about-us-text'>{ABOUT_US_TEXT_1}</label>
            <br/><br/>
            <label className='about-us-text'>{ABOUT_US_TEXT_2}</label>
        </div>
        
        <label className='about-us-title' id="our-team">Our Team</label>
        <TeammateCard image={timImage} fullName={"Tim Laforest"} title={"Co-Founder & COO ・"} description={TIM_DESCRIPTION}/>
        <TeammateCard image={markImage} fullName={"Mark Spiro"} title={"Co-Founder & CEO ・"} description={MARK_DESCRIPTION}/>
        

    </div>
}

type TeammateCardPropsType = {
    image: string;
    fullName: string;
    title: string;
    description: string
}

const TeammateCard = (props: TeammateCardPropsType) => {
    return <div className="teammate-card">
            <img src={props.image} alt='' className='teammate-image'/> 
            <div className='teammate-body'>
                <label className='teammate-name'>{props.fullName}</label>
                <div className='teammate-title-div'>
                    <label className='teammate-title'>{props.title}</label>
                    <img src={linkedin} alt=" " width={24} height={24}/>
                </div>
                <label className='teammate-description'>{props.description}</label>
            </div>
    </div>
}

export default AboutUs