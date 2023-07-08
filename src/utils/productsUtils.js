export const filterProducts = (productId,products) => {
    const filterProduct = productId === 'all' ? products : products.filter((product) => {
        if(product?.inCategory?.catId === productId){
            return productId
        }
    })

    return filterProduct
}

