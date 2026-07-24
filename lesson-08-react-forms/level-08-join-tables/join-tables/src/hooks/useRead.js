import { useState } from "react";

export function useRead(prisma) {
  const [data, setData] = useState();

  return [data, handleSubmit];

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const where = {};

    const productId = form.elements.productId.value;
    const productName = form.elements.productName.value;
    const maxPrice = form.elements.maxPrice.value;
    if (productId) where.id = productId;
    if (productName) where.name = productName;
    if (maxPrice) where.price = { lte: maxPrice };

    const results = await prisma.products.findMany({
      where,
      include: { reviews: { include: { users: true } } },
    });
    setData(results);
  }
}
