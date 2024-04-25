import axiosClient from "@/axiosClient";

export function searchProduct({ commit },keyword) {
  axiosClient.get(`product/search?name=${keyword}`)
  .then(({data}) => {
    commit('setSearchProduct', data);
  });
}

export function getProductByCategory({ commit }, category_name) {
  let url = "/Product"; 
  if (category_name.toLowerCase() === "all") {
    url = '/Product';
    axiosClient.get(url)
    .then(({ data }) => {
      commit('getListProduct', data.products);
    })
  } else {
    url = `Product/category/name/${category_name}`;
    axiosClient.get(url)
    .then(({ data }) => {
      commit('getListProduct', data);
    })
  }
}

export function getProduct({ commit }, { category_name, styles, subjects, materials, sizes }) {
  
  let url = "/Product";
 
  if (category_name && category_name.toLowerCase() !== "all") {
    url = `/Product/category/name/${category_name}`;
  }
  
  if (styles || subjects || materials || sizes) {
    const params = new URLSearchParams();
    if (styles) {
      styles.forEach(style => params.append('styles', style));
    }
    if (subjects) {
      subjects.forEach(subject => params.append('subjects', subject));
    }
    if (materials) {
      materials.forEach(material => params.append('materials', material));
    }
    if (sizes) {
      sizes.forEach(size => params.append('sizes', size));
    }
    url += `?${params.toString()}`;
  }

  axiosClient.get(url)
    .then(({ data }) => {
      commit('getListProduct', data.products || data); 
    })
    
}
export function  fetchProductDetail({ commit }, productId) {
  return axiosClient.get(`/product/${productId}`)
    .then(({ data }) => {
      commit('SET_PRODUCT_DETAIL', data);
    })
    .catch((error) => {
      console.error('Error fetching product detail:', error);
    });
}

export function fetchProductByCategory({ commit }) {
 axiosClient.get('/category')
      .then(({ data }) => {
        commit('SET_CATEGORIES', data);
      })
};

export function fetchProductByFilter({ commit }) {
  
  axiosClient.get('/Filer')
  
       .then(({ data }) => {
        
         commit('SET_Fitler', data);
       })
 };