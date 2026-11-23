import { ROLES } from '#configurations/constants.js';

export const productRoutes = [
 
    { 
        pattern: '/products',
        method: 'GET',
        handler: ProductController.index,
        allow: [ROLES.ADMIN, ROLES.CLIENT]
    },

    { 
        pattern: '/products/:id',
        method: 'GET',
        handler: ProductController.show,
        allow: [ROLES.ADMIN, ROLES.CLIENT]
    },

    { 
        pattern: '/products',
        method: 'POST',
        handler: ProductController.create,
        allow: [ROLES.ADMIN]
    },

    { 
        pattern: '/products/:id',
        method: 'DELETE',
        handler: ProductController.destroy,
        allow: [ROLES.ADMIN]
    },

    { 
        pattern: '/products/:id',
        method: 'PUT',
        handler: ProductController.update,
        allow: [ROLES.ADMIN]
    },

    { 
        pattern: '/products/:id',
        method: 'PATCH',
        handler: ProductController.modify,
        allow: [ROLES.ADMIN]
    }

];