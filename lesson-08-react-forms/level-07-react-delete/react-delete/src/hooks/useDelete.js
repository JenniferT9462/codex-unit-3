import { useState } from "react";

export function useDelete(prisma) {
  const [data, setData] = useState();

  return [data, handleSubmit];

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const form = event.target;
      const where = {
        id: Number(form.elements.productId.value),
      };
      const result = await prisma.products.delete({ where });

      setData([result]);
    } catch (error) {
      const message = { name: "Error: Product not found or invalid ID" };
      setData([message]);
    }
  }
}
