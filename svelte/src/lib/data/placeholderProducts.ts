export const placeholderProducts = [
	'/images/product-1.png',
	'/images/product-2.png',
	'/images/product-3.png',
	'/images/product-4.png',
	'/images/product-5.png',
	'/images/product-6.png'
].map((src, index) => ({
	handle: `product-${index + 1}`,
	title: 'Classic Tee',
	src
}));