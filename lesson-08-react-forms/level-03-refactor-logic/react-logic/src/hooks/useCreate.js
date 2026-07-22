export function useCreate(prisma, setData) {
    async function handleCreate(event) {
      event.preventDefault();
      if (prisma) {
        const form = event.target;
        const data = {
          name: form.elements.productName.value,
          price: form.elements.productPrice.value,
          src: form.elements.productImage.value,
        };
        await prisma.products.create({ data });
        const results = await prisma.products.findMany();
        setData(results);
        form.reset();
      }
    }

    return handleCreate;
}