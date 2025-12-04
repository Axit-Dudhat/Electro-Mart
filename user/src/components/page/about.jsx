
import ServicesSection from "../ServicesSection";
import { Store ,CircleDollarSign , ShoppingBag , TrendingUp, Bold } from 'lucide-react'


const Aboutpage=()=>{
    const categories = [
  {
    id: 1,
    value: "10.5K",
    name: 'Sailors active our site',
    icon: Store
  },
  {
    id: 2,
    value: "10.5K",
    name: 'Mopnthly Produduct Sale ',
    icon: CircleDollarSign 
  },
  {
    id: 3,
    value: "10.5K",
    name: 'Customer active in our site ',
    icon: ShoppingBag 
  },
  {
    id: 4,
    value: "10.5K",
    name: 'Anual gross sale in our site ',
    icon: TrendingUp 
  }
]
const handleCategoryClick = (category) => {
console.log('Category clicked:', category.name)
}
    return(
<div> <br /><br /> 

    <section className="browse-category"  >
      <div className="categories-grid" >
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <div 
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
                    <div className="category-icon">
                        <IconComponent size={40} />
                    </div>
              <span className="category-value">{category.value}</span>
              <span className="category-name">{category.name}</span>
            </div>
          )
        })}
      </div>
    </section>
            <ServicesSection/>
        </div>
    )
}
export default Aboutpage