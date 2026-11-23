import pool from '#services/db.js';
import { handleDBError } from '#tools';

const ProductModel = {

    selectAll: async () => {

            try {
                
                const query = `SELECT id, nom, description, image, prix, points,  FROM product`;

                const rows = await pool.query(query);
                
                return rows; // MariaDB retourne un tableau de résultats

            } catch(err) {

                handleDBError(err);

            }  
    },

    selectById: async (id) => {
        
        try{
            
            const params = {
                id
            };

            // const [row] = va extraire la première ligne avec les données
            const [row] = await pool.query("SELECT id, nom, description, image, prix, points, FROM product WHERE id = :id", params);
            return row; // MariaDB retourne un tableau de résultats

        } catch(err) {

            handleDBError(err);
            
        }  
    },

    insertOne: async (name, picture, price, points, description) => {

        try {

            const params = {
                name,
                picture,
                price, 
                points, 
                description
            };

            const result = await pool.query("insert into product (nom, image, description, prix, points) values (:name,:picture,:description,:price,:points)", params);
            return Number(result.insertId);        

        } catch(err) {

            handleDBError(err);

        }  

    },

    deleteById: async (id) => {
        
        try{
            
            const params = {
                id
            };

            // const [row] = va extraire la première ligne avec les données
            const result = await pool.query("DELETE FROM product WHERE id = :id", params);
            return result.affectedRows > 0; // MariaDB retourne un tableau de résultats

        } catch(err) {

            handleDBError(err);
            
        }  
    },

    updateById: async (id, name, picture, price) => {

        try {

            const params = {
                id,
                name,
                picture,
                price, 
                points, 
                description
            };

            const result = await pool.query("update product set nom = :name, image = :picture, prix = :price, points = :points, description = :description where id = :id", params);
            return result.affectedRows > 0;             

        } catch(err) {

            handleDBError(err);

        }  

    },
    
    
}