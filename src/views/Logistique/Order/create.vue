<template>
    <div class="content-page">
        <div class="container-fluid add-form-list">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Détails de commande</h4>
                            </div>
                        </div>
                        <div class="card-body">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Détails</a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Produits</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <form  data-toggle="validator">
                                    
                                    <div class="row">
                                        
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Nom et prénoms *</label>
                                                <select name="" id="" autocomplete="family-name" v-model="fullname" class="form-control" @change="onChange">
                                                    <option v-for="(use, index) in uses" :key="index" :value="use.nom+' * '+use.prenoms+' * '+use.id"> {{ use.nom }} {{ use.prenoms }} </option>
                                                </select>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div> 
                                         
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>e-mail *</label>
                                                <input type="text" min="0" v-model="order.email" class="form-control" placeholder="" required>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Numero *</label>
                                                <input type="text" min="0" v-model="order.phone" class="form-control" placeholder="" required>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>  
                                         <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Ville *</label>
                                                <input type="text" min="0" v-model="order.ville" class="form-control" placeholder="" required>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div> 
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Lieu de livraison *</label>
                                                <input type="text" min="0" v-model="order.shipping" class="form-control" placeholder="" required>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>                        
                                    </div>                            
                                   
                                </form>
                            </div>
                             
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div class="row col-lg-12">
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Libelle *</label>
                                                <select name="" id="" autocomplete="name" v-model="product" class="form-control" @change="onChanges">
                                                    <option v-for="(product, index) in products" :key="index" :value="product.libelle+' * '+product.description+' * '+product.id+' * '+product.image+'  * '+product.price"> {{ product.libelle }} </option>
                                                </select>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                            
                                    </div> 
                                    
                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Description *</label>
                                                <textarea v-model="info.description" class="form-control" name="" id="" cols="30" rows="1"></textarea>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div> 

                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Quantité *</label>
                                                <input class="form-control" type="number" name="" id="" v-model="qte">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div> 

                                     <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Debut *</label>
                                                <input class="form-control" type="date" :min=today name="" id="" v-model="db">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div> 

                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Fin *</label>
                                                <input class="form-control" type="date" :min=db name="" id="" v-model="fn">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div> 

                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Couleur *</label>
                                                <input  class="form-control" type="text" name="" id="" v-model="color">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>  

                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Lieu *</label>
                                                <input  class="form-control" type="text" name="" id="" v-model="location">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>  

                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Objet *</label>
                                                <input  class="form-control" type="text" name="" id="" v-model="object">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>  

                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Détails *</label>
                                                <input  class="form-control" type="text" name="" id="" v-model="details">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div> 

                                    <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Participants *</label>
                                                <input  class="form-control" type="number" name="" id="" v-model="participants">
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>     
                                    
                                    <div class="col-md-6" v-if="info.libelle != ''">
                                            <div class="form-group">
                                                <img class="img" :src="URL_LOGISTIQUE+info.photo" alt="">
                                            </div>
                                    </div> 
                                    <div class="col-md-6" v-if="info.photo != ''">
                                            <div class="form-group">
                                                <button @click="add" class="btn btn-primary mr-2">Ajouter au panier</button>
                                            </div>
                                    </div> 
                                </div>
                            </div>
                            <hr>
                            <button v-if="perms.includes('edit-order')" @click="updateOrder" type="submit" class="btn btn-primary mr-2">enregistrer</button>
                                    <button type="reset" class="btn btn-danger">reinitialiser</button>
                        </div>
                        </div>

                    </div>
                    <div class="vld-parent">
                        <loading :active.sync="isLoading" 
                        :can-cancel="true" 
                        :is-full-page="fullPage"></loading>
                    </div>
                </div>
            </div>
            <!-- Page end  -->
        </div>
    </div>
</template>
<script>
import axios from "axios";
import {URL_LOGISTIQUE_API, URL_AUTH_API, URL_LOGISTIQUE} from '@/config'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2'
export default {
    components: {
        Loading
    },
    data() {
        return {
            URL_LOGISTIQUE:URL_LOGISTIQUE,
            order:{
                nom: '',
                prenoms: '',
                user_id: this.$store.state.user.id,
                cart: new Array(),
                raison_social: 'LCE sarl'
            },
            isLoading: false,
            fullPage: true,
            user: this.$store.state.user,
            perms:[],
            fullname: '',
            uses: [],
            products: [],
            color: '',
            object: '',
            details: '',
            participants: '',
            location: '',
            db: '',
            fn: '',
            qte: 0,
            jours: 0,
            product: '',
            info: {
                libelle: '',
                description: '',
                photo: '',
                id: 0,
                price:0
            },
            cart_sent: false,
            today: null
        };
    },
    
    mounted(){
        this.user.permissions.forEach(element => {
            this.perms.push(element.name)
        });
        this.getUsers()
        this.getProducts()
        this.order.cart = this.$store.state.cart_log
        this.today = new Date().toJSON().slice(0,10);
    },
    methods:{
        onChange(){
            this.order.nom = this.fullname.split(' * ')[0]
            this.order.prenoms = this.fullname.split(' * ')[1]
        },
        add(){
            this.cart_sent = true
            if ( this.qte > 0) {
                if (this.fullname != '') {
                    let days = ((((Date.parse(this.fn) - Date.parse(this.db)) / 1000 )/ 60 )/ 60 )/ 24
                        this.order.cart = this.order.cart || []
                    this.order.cart.push({
                        product_id: this.info.id,
                        photo: this.info.photo,
                        to: this.fn,
                        location: this.location,
                        objects: this.object,
                        details: this.details,
                        participant: this.participants,
                        from: this.db,
                        quantity: this.qte,
                        days: days + 1,
                        price: this.info.price,
                    })
                    Swal.fire('Réussi', 'Ajouté au panier.', 'success')
                    localStorage.setItem('cart_log', JSON.stringify(this.order.cart))
                    console.log('cart', this.order.cart);
                }
                else
                {
                    Swal.fire('Note', 'Remplissez d\'abord les détails de l\'utilisateur.', 'info')
                }
                
            }
            else{
                Swal.fire('Note', 'Remplissez tous les champs.', 'info')
                
            }
        },
        onChanges(){
            this.info.libelle = this.product.split(' * ')[0]
            this.info.description = this.product.split(' * ')[1]
            this.info.id = Number(this.product.split(' * ')[2])
            this.info.price = Number(this.product.split(' * ')[4])
            this.info.photo = this.product.split(' * ')[3]
        },
        /* reset(){
            this.cart_sent = true
            if (this.cart.length == 0) {
                Swal.fire(
                        'Attention!',
                        'Remplissez d\'abord le panier.',
                        'warning'
                    )
            }
             

            this.info.libelle = ''
            this.info.description = ''
            this.info.id = 0
            this.info.photo = ''
            this.product = ''
            this.qte = 1
            this.color = ''
        }, */
        store() {
            this.$router.push('/edit-e-commerce-order/'+this.$route.params.id)
            
        },
        updateOrder() {
            
            this.order.cart = this.order.cart || []
            
                    if (this.fullname != '') {
                        if (this.cart_sent == true) {
                        this.isLoading = true
                        axios.post(URL_LOGISTIQUE_API+'orders', this.order)
                        .then(response => {
                            console.log(response)
                            if (response.data.state == true) {
                                Swal.fire(
                                    'Operation Effectuée!',
                                    'Commande ajoutée avec succès.',
                                    'success'
                                )
                                
                            }
                            else{
                                Swal.fire(
                                    'Echec!',
                                    'Commande non ajoutée .',
                                    'error'
                                )
                            }
                            localStorage.removeItem('cart_log')
                            this.order.cart = []
                            /* this.order = response.data */
                                    this.isLoading = false
                            })
                            .catch(error => {
                                console.log(error)
                                
                                this.errored = true
                                this.isLoading = false
                            })
                            
                    } 
                    else {
                        Swal.fire(
                                'Note!',
                                'Faites d\'abord le panier .',
                                'warning'
                            )
                    }  
                    } else {
                         Swal.fire('Note', 'Remplissez d\'abord les détails de l\'utilisateur.', 'info')
                    }   
                
            
        },
        getUsers(){
            let app = this
            axios.get(URL_AUTH_API+'getUsers')
            .then(function(reponse) {
                console.log(reponse);
                if (reponse.data.status == true) {
                    reponse.data.data.forEach(element => {
                        element.roles.forEach(function(el){
                            if (el.name == "client") {
                                app.uses.push(element)
                            }
                        })
                    });
                }
            })
            .catch(function(error) {
                console.log(error);
            })
        },
        getProducts(){
            let app = this
            axios.get(URL_LOGISTIQUE_API+'products')
            .then(function(reponse) {
                console.log(reponse);
                if (reponse) {
                    app.products = reponse.data.data
                    reponse.data.data.forEach(element => {
                        if (element.photo.length > 0) {
                            element.image = element.photo[0].path
                        }
                        else{
                            element.image = ''
                        }
                    });
                }
            })
            .catch(function(error) {
                console.log(error);
            })
        }
    }
}
</script>
<style>
.img{
    width: 200px;
    height: 200px;
}
</style>