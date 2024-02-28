import Header from "@/components/website/header/header";
import Sectionone from '../components/website/sectionone/index'
import Sectiontwo from '../components/website/sectiontwo/index'
import Sectionthree from '../components/website/sectionthree/index'
// import Sectionfour from '../components/website/Testimonial/Testimonial'
import Image from "next/image";
import SectionFive from "@/components/website/SectionFive/sectionfive";
import Test from "@/components/website/Testimony/test";
import Contact from "@/components/website/contact/contact";


export default function Home() {
  return (
   <div>
    <Sectionone />
    <Sectiontwo />
    <Sectionthree />
    <Test />
    <SectionFive />
    <Contact />
   </div>
  );
}
