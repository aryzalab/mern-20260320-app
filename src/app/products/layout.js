import ProductBanner from "./_components/Banner";

const ProductLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-16"> 
      <ProductBanner />
      <div>{children}</div>
    </div>
  );
};

export default ProductLayout;
