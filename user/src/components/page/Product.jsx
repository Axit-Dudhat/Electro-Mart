
const Product=()=>{
    return (
    <section className="best-seller-section">
      <div className="section-header">
        <div className="section-title-container">
          <div className="category-indicator"></div>
          <h2 className="section-title">Best Selling Products</h2>
        </div>
      </div>
      <div className="products-grid">
        {bestSellerProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
export default Product