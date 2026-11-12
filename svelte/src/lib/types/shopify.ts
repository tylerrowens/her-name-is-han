//PRODUCT

export type ShopifyMoney = {
	amount: string;
	currencyCode: string;
};

export type ShopifyImage = {
	url: string;
	altText?: string | null;
};

export type ShopifyVariant = {
	id: string;
	title: string;
	availableForSale: boolean;
	price: ShopifyMoney;
	image?: ShopifyImage | null;
	selectedOptions: {
		name: string;
		value: string;
	}[];
};

export type ShopifyProductOptions = {
	id: string;
	name: string;
	values: string[];
};

export type ShopifyProduct = {
	id: string;
	title: string;
	handle: string;
	description: string;
	featuredImage?: ShopifyImage | null;
	priceRange: {
		minVariantPrice: ShopifyMoney;
	};
	options: ShopifyProductOptions[];
	variants: {
		edges: {
			node: ShopifyVariant;
		}[];
	};
};

export type ShopifyCollection = {
	id: string;
	title: string;
	handle: string;
	products: {
		edges: {
			node: ShopifyProduct;
		}[];
	};
};

export type CollectionProductsResponse = {
	collection: ShopifyCollection;
};

export type ProductByHandleResponse = {
	product: ShopifyProduct | null;
};


//CART

export type ShopifyCart = {
    id: string;
    checkoutUrl: string;
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
    }
};

export type CartLinesRemoveResponse = {
    cartLinesRemove: {
        cart: ShopifyCart | null;
        userErrors: ShopifyUserError[];
    }
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
    cartCreate:{
        cart: ShopifyCart | null ;
        userErrors: ShopifyUserError[];
    };
};