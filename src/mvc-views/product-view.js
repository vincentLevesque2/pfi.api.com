const ProductView = {

    single: (product) => {

        return {

            id: product.id,
            nom: product.nom,
            description: product.description,
            image: product.image,
            prix: product.prix,
            point: product.point
        };

    }, 

    collection: (products) => {

       // Map va créer un tableau avec tous les résultats 
       return products.map(ProductView.single);

    }

};

export default ProductView;