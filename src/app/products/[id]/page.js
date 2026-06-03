const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  return <div>Product details of id: {id}</div>;
};

export default ProductDetailsPage;
