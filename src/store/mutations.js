export function setSearchProduct(state, product) {
  state.searchProduct = product.products;
  state.totalPage = product.totalPage;
}

export function getListProduct(state, product) {
  state.listProducts = product;
}

export function SET_PRODUCT_DETAIL(state, product) {
  state.productDetail = product;
}


export function SET_CATEGORIES(state, categories) {
  state.categories = categories;
}

export function SET_Fitler(state, filters) {
  state.filters = filters;
}
