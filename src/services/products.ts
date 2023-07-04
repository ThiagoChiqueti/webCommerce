// src/services/products.ts

export type ProductType = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
  inStock: number
}

export const fetchProducts = async () => {
  const products: ProductType[] = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/Products`).then(res => res.json())
  console.log(products)
  return products
}

export const fetchProduct = async (id: string | number) => {
  const product: ProductType = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`).then(res => res.json())
  return product
}
