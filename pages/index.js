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
import { useLoading } from '../store/index';

const Index = ({ url }) => {
 
    const { setLoading } = useLoading();

    return (
        <>
            <MainBanner />
            <OurSolutions />
            {/* <CaseStudySlider url={url} /> */}
            <AboutUsContent />
            <OurMission />
            <OurServices url={url} setLoading={setLoading}/>
           
            <Testimonials url={url} setLoading={setLoading}/>
            <Partner url={url} setLoading={setLoading}/>
          {/* <ServicesStyleThree/> */}
          <FeaturedServices/>
             <WhyChooseUs/>
             <StartProject/>
        </>
    );
}

export default Index;


