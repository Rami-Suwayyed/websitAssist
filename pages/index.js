import MainBanner from '../components/DataScienceAndMLCompany/MainBanner';
import OurSolutions from '../components/DataScienceAndMLCompany/OurSolutions';
import OurServices from '../components/DataScienceAndMLCompany/OurServices';
import CaseStudySlider from '../components/DataScienceAndMLCompany/CaseStudySlider';
import Partner from '../components/DataScienceAndMLCompany/Partner';
import AboutUsContent from '../components/AboutUsTwo/AboutUsContent';
import OurMission from '../components/AboutUsTwo/OurMission';
import Testimonials from '../components/AboutUsTwo/Testimonials';
import WhyChooseUs from '../components/AboutUs/WhyChooseUs';
import StartProject from '../components/Common/StartProject';
// import ServicesStyleThree from '../components/Services/ServicesStyleThree';
import FeaturedServices from '../components/DigitalMarketingAgency/FeaturedServices';
const Index = ({ url }) => {
 

    return (
        <>
            <MainBanner />
            <OurSolutions />
            <CaseStudySlider url={url} />
            <AboutUsContent />
            <OurMission />
            <OurServices url={url}/>
           
            <Testimonials url={url}/>
            <Partner url={url} />
          {/* <ServicesStyleThree/> */}
          <FeaturedServices/>
             <WhyChooseUs/>
             <StartProject/>
        </>
    );
}

export default Index;


