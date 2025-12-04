import {BestSellerSection,JustForYouSection} from '../Sections'
import ServiceSection from '../ServicesSection'
import { BrowseByCategory } from './category/BrowseByCategory'
import Discountsection from './discount'
function home() {
    return(
        <>  
            <Discountsection/>
            <BestSellerSection />
            <BrowseByCategory />
            <JustForYouSection />
            <ServiceSection />
        </>
        )
}
export default home