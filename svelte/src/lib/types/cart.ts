export type ShopifyCart = {
	id: string;
	checkoutUrl: string;
	totalQuantity: number;
	cost: {
		subtotalAmount: {
			amount: string;
			currencyCode: string;
		};
	};
	lines: {
		edges: ShopifyCartLineEdge[];
	};
};

export type CartLinesAddResponse = {
	cartLinesAdd: {
		cart: ShopifyCart | null;
		userErrors: ShopifyUserError[];
	};
};

export type CartLinesRemoveResponse = {
	cartLinesRemove: {
		cart: ShopifyCart | null;
		userErrors: ShopifyUserError[];
	};
};

export type ShopifyCartLineEdge = {
	node: ShopifyCartLine;
};

export type ShopifyCartLine = {
	id: string;
	quantity: number;
	merchandise: {
		id: string;
		title: string;
		price: {
			amount: string;
			currencyCode: string;
		};
		image?: {
			url: string;
			altText: string | null;
		} | null;
		product: {
			title: string;
			handle: string;
		};
	};
};

export type ShopifyUserError = {
	field: string[] | null;
	message: string;
};

export type CartCreateResponse = {
	cartCreate: {
		cart: ShopifyCart | null;
		userErrors: ShopifyUserError[];
	};
};
