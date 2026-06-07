import ProductBanner from "./_components/Banner";

const ProductLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <ProductBanner />
      <section className="py-12">{children}</section>
    </div>
  );
};

export default ProductLayout;
