import VueRouter from "vue-router";

import Home from "./views/home.vue";
import Login from "./views/auth/login.vue";
import PageNotFound from "./views/notFound.vue";
import Log from "./views/logs/index.vue";
import LogShow from "./views/logs/show.vue";

// E-COMMERCE

    // * product

import EcommerceProductCreate from "./views/Ecommerce/product/create.vue"
import EcommerceProductIndex from "./views/Ecommerce/product/index.vue"
import EcommerceProductShow from "./views/Ecommerce/product/show.vue"
import EcommerceProductEdit from "./views/Ecommerce/product/edit.vue"

    // * Type

import EcommerceProductTypeCreate from "./views/Ecommerce/Type/create.vue"
import EcommerceProductTypeIndex from "./views/Ecommerce/Type/index.vue"
import EcommerceProductTypeEdit from "./views/Ecommerce/Type/edit.vue"
import EcommerceProductTypeShow from "./views/Ecommerce/Type/show.vue"

    // * Order

import EcommerceOrderCreate from "./views/Ecommerce/Order/create.vue"
import EcommerceOrderIndex from "./views/Ecommerce/Order/index.vue"
import EcommerceOrderEdit from "./views/Ecommerce/Order/edit.vue"
import EcommerceOrderShow from "./views/Ecommerce/Order/show.vue"

// TRANSPORT

    // * CAR

import TransportCarCreate from "./views/Transport/car/create.vue"
import TransportCarIndex from "./views/Transport/car/index.vue"
import TransportCarShow from "./views/Transport/car/show.vue"
import TransportCarEdit from "./views/Transport/car/edit.vue"

    // * Type de CAR

import TransportCarTypeCreate from "./views/Transport/type/create.vue"
import TransportCarTypeIndex from "./views/Transport/type/index.vue"
import TransportCarTypeEdit from "./views/Transport/type/edit.vue"
import TransportCarTypeShow from "./views/Transport/type/show.vue"

    // * Marque de CAR

import TransportCarMarqueCreate from "./views/Transport/marque/create.vue"
import TransportCarMarqueIndex from "./views/Transport/marque/index.vue"
import TransportCarMarqueEdit from "./views/Transport/marque/edit.vue"
import TransportCarMarqueShow from "./views/Transport/marque/show.vue"

    // * Model de CAR

import TransportCarModelCreate from "./views/Transport/model/create.vue"
import TransportCarModelIndex from "./views/Transport/model/index.vue"
import TransportCarModelEdit from "./views/Transport/model/edit.vue"
import TransportCarModelShow from "./views/Transport/model/show.vue"

    // * Order

import TransportOrderCreate from "./views/Transport/order/create.vue"
import TransportOrderIndex from "./views/Transport/order/index.vue"
import TransportOrderEdit from "./views/Transport/order/edit.vue"
import TransportOrderShow from "./views/Transport/order/show.vue"

    //*logistique
     
     //materiel


import LogistiqueMaterielShow from "./views/logistique/materiel/show.vue"
import LogistiqueMaterielCreate from "./views/logistique/materiel/create.vue"
import LogistiqueMaterielIndex from "./views/logistique/materiel/index.vue"
import LogistiqueMaterielEdit from "./views/logistique/materiel/edit.vue"

//gestion

import LogistiqueGestionShow from "./views/logistique/gestion/show.vue"
//import LogistiqueGestionCreate from "./views/logistique/gestion/create.vue"
import LogistiqueGestionIndex from "./views/logistique/gestion/index.vue"
import LogistiqueGestionEdit from "./views/logistique/gestion/edit.vue"



const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
    {   path: "*", 
        component: PageNotFound ,
        meta: {
            layout: "Auth",
            requiredAuth: false
          }
        
    },
    // LOG 
    {   path: "/logs", 
        component: Log ,
        meta: {
            layout: "Default",
            requiredAuth: false
          }
        
    },
    {   path: "/log/:id", 
        component: LogShow ,
        meta: {
            layout: "Default",
            requiredAuth: false
          }
    },
      {
        path: "/connexion",
        name: "connexion",
        component: Login,
        meta: {
          layout: "Auth",
          requiredAuth: false
        }
      },

      
     //logistique
       //materiel
       {
        path: "/materiel-stock-products",
        name: "LogistiqueMaterielIndex",
        component: LogistiqueMaterielIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      
      {
        path: "/show-materiel-product/:id",
        name: "LogistiqueMaterielShow",
        component: LogistiqueMaterielShow,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      
      {
        path: "/edit-materiel-product/:id",
        name: "LogistiqueMaterielEdit",
        component: LogistiqueMaterielEdit,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },

      {
        path: "/create-materiel-product",
        name: "LogistiqueMaterielCreate",
        component: LogistiqueMaterielCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
    

      //gestion


      {
        path: "/gestion-stock-product",
        name: "LogistiqueGestionIndex",
        component: LogistiqueGestionIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/show-gestion-product/:id",
        name: "LogistiqueGestionShow",
        component: LogistiqueGestionShow,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
 
      {
        path: "/edit-gestion-product/:id",
        name: "LogistiqueGestionEdit",
        component: LogistiqueGestionEdit,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },

    /*/   {
        path: "/materiel-stock-products",
        name: "LogistiqueMaterielIndex",
        component: LogistiqueMaterielIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/create-materiel-product",
        name: "LogistiqueMaterielCreate",
        component: LogistiqueMaterielCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },

      
      

      //*gestion

      {
        path: "/gestion-stock-product",
        name: "LogistiqueGestionIndex",
        component: LogistiqueGestionIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },


      {
        path: "/create-gestion-product",
        name: "LogistiqueGestionCreate",
        component: LogistiqueGestionCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },

      
     */




      // E-COMMERCE 

          // * product
      {
        path: "/create-e-commerce-product",
        name: "EcommerceProductCreate",
        component: EcommerceProductCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/e-commerce-products",
        name: "EcommerceProductIndex",
        component: EcommerceProductIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/show-e-commerce-product/:id",
        name: "EcommerceProductShow",
        component: EcommerceProductShow,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/edit-e-commerce-product/:id",
        name: "EcommerceProductEdit",
        component: EcommerceProductEdit,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
          // * product Type
      {
        path: "/create-e-commerce-product-type",
        name: "EcommerceProductTypeCreate",
        component: EcommerceProductTypeCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/edit-e-commerce-product-type/:id",
        name: "EcommerceProductTypeEdit",
        component: EcommerceProductTypeEdit,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/show-e-commerce-product-type/:id",
        name: "EcommerceProductTypeShow",
        component: EcommerceProductTypeShow,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/e-commerce-product-types",
        name: "EcommerceProductTypeIndex",
        component: EcommerceProductTypeIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
          // * COMMANDE
          {
            path: "/create-e-commerce-order",
            name: "EcommerceOrderCreate",
            component: EcommerceOrderCreate,
            meta: {
              layout: "Default",
              requiredAuth: false
            }
          },
          {
            path: "/e-commerce-orders",
            name: "EcommerceOrderIndex",
            component: EcommerceOrderIndex,
            meta: {
              layout: "Default",
              requiredAuth: false
            }
          },
          {
            path: "/show-e-commerce-order/:id",
            name: "EcommerceOrderShow",
            component: EcommerceOrderShow,
            meta: {
              layout: "Default",
              requiredAuth: false
            }
          },
          {
            path: "/edit-e-commerce-order/:id",
            name: "EcommerceOrderEdit",
            component: EcommerceOrderEdit,
            meta: {
              layout: "Default",
              requiredAuth: false
            }
          },

      // TRANSPORT 

          // * CAR
      {
        path: "/create-transport-car",
        name: "TransportCarCreate",
        component: TransportCarCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/transport-cars",
        name: "TransportCarIndex",
        component: TransportCarIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/show-transport-car/:id",
        name: "TransportCarShow",
        component: TransportCarShow,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/edit-transport-car/:id",
        name: "TransportCarEdit",
        component: TransportCarEdit,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
          // * Car Type
      {
        path: "/create-transport-car-type",
        name: "TransportCarTypeCreate",
        component: TransportCarTypeCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/edit-transport-car-type/:id",
        name: "TransportCarTypeEdit",
        component: TransportCarTypeEdit,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/show-transport-car-type/:id",
        name: "TransportCarTypeShow",
        component: TransportCarTypeShow,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/transport-car-types",
        name: "TransportCarTypeIndex",
        component: TransportCarTypeIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
        // * Car Marque
      {
        path: "/create-transport-car-marque",
        name: "TransportCarMarqueCreate",
        component: TransportCarMarqueCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/edit-transport-car-marque/:id",
        name: "TransportCarMarqueEdit",
        component: TransportCarMarqueEdit,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/show-transport-car-marque/:id",
        name: "TransportCarMarqueShow",
        component: TransportCarMarqueShow,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/transport-car-marques",
        name: "TransportCarMarqueIndex",
        component: TransportCarMarqueIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      // * Car Models
      {
        path: "/create-transport-car-model",
        name: "TransportCarModelCreate",
        component: TransportCarModelCreate,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/edit-transport-car-model/:id",
        name: "TransportCarModelEdit",
        component: TransportCarModelEdit,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/show-transport-car-model/:id",
        name: "TransportCarModelShow",
        component: TransportCarModelShow,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
      {
        path: "/transport-car-models",
        name: "TransportCarModelIndex",
        component: TransportCarModelIndex,
        meta: {
          layout: "Default",
          requiredAuth: false
        }
      },
          // * COMMANDE
          {
            path: "/create-transport-order",
            name: "TransportOrderCreate",
            component: TransportOrderCreate,
            meta: {
              layout: "Default",
              requiredAuth: false
            }
          },
          {
            path: "/transport-orders",
            name: "TransportOrderIndex",
            component: TransportOrderIndex,
            meta: {
              layout: "Default",
              requiredAuth: false
            }
          },
          {
            path: "/show-transport-order/:id",
            name: "TransportOrderShow",
            component: TransportOrderShow,
            meta: {
              layout: "Default",
              requiredAuth: false
            }
          },
          {
            path: "/edit-transport-order/:id",
            name: "TransportOrderEdit",
            component: TransportOrderEdit,
            meta: {
              layout: "Default",
              requiredAuth: false
            },
          },
];

const router = new VueRouter({
    history: true,
    mode: "history",
    routes,
});

export default router;