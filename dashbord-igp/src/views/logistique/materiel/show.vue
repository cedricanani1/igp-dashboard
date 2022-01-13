<template>
    <div class="content-page">
        <div class="container-fluid add-form-list">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Détails d'un Produit Logistique</h4>
                                
                            </div>
                        </div>
                        <div class="card-body">
                            <!-- <form  action="#" data-toggle="validator"> -->
                                 
                                  <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Libelle *</label>
                                            <input type="text" v-model="materiel.libelle" class="form-control" placeholder="Entrer libelle" required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                   
                                     <div class="col-md-6">
                                        <div class="form-group">
                                            <label>slug *</label>
                                            <input type="text"  v-model="materiel.slug" class="form-control" placeholder="Entrer adresse" required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div> 
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Prix *</label>
                                            <input type="number" min="0" v-model="materiel.price" class="form-control" placeholder="Entrer adresse" required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>     
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>reduction (%) *</label>
                                            <input type="number" min="0" v-model="materiel.discount" class="form-control" placeholder="Entrer adresse" required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div> 
                                   <!--<div class="col-md-6">
                                        <div class="form-group">
                                            <label>Categorie *</label>
                                            <select v-model="materiel.product_id" class="form-control">
                                                <option v-for="(materiel,index) in productlist" :key="index" :value="product.id"> {{materiel.libelle}} </option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>-->
                                     <div class="col-md-6">
                                        <div class="form-group">
                                            <label>description *</label>
                                            <input type="text"  min="0" v-model=materiel.description class="form-control"  required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div> 
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Stock *</label>
                                            <input type="text" min="0" v-model="materiel.stock" class="form-control" placeholder="Entrer adresse" required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
                                      <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Photo *</label>
                                           <!-- <img :src="materiel.photo">  -->
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div> 
                                    <div v-for="n in images" :key="n" class="col-md-6">
                                        <div class="form-group">
                                            <label>Photo *</label>
                                            <img :src="URL_LOGISTIQUE+n.path" alt="" width="20%">
                                            <button class=" btn btn-secondary" @click="destroyPath(n.path)"><i class="fa fa-trash"></i></button>
                                        </div>
                                    </div>  
                                    <div v-if="tof">
                                        <label for="">Ajouter une photo</label>
                                        <input type="file" ref="photos" multiple>
                                    </div>  
                                    
                                                         
                                </div>                            
                                <button type="submit" @click="store" class="btn btn-primary mr-2">Modifier</button>
                                <button  class="btn btn-secondary mr-2" @click="addBoolPhoto(true)" v-if="!tof">Ajouter une image</button>
                                <button  class="btn btn-secondary mr-2" @click="addPhoto()" v-else>enregistrer l'image</button>
                                <button type="reset" class="btn btn-danger">reinitialiser</button>
                            <!-- </form> -->
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
import {URL_LOGISTIQUE_API} from '@/config'
import {URL_LOGISTIQUE} from '@/config'
//import {URL_LOGISTIQUE} from '@/config'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2'
export default {
    components: {
            Loading
    },
    data()
     {
        return {
          URL_LOGISTIQUE:URL_LOGISTIQUE,
            materiel:[],
            materiellist:[],
            images:[],
            isLoading: false,
            fullPage: true,
            tof:false,
            photos:[]
        };
    },

    mounted(){
       //this.getMaterielType()
        this.getMateriel()
    },

    methods:{
        store() {
            this.$router.push('/edit-materiel-product/'+this.$route.params.id)
        },


        addBoolPhoto(bool) 
        {
            this.tof = bool
        },


       addPhoto() 
       {
            var productData = new FormData();
            this.photos = this.$refs.photos.files
            for( var i = 0; i < this.photos.length; i++ ){
                let file = this.photos[i];
                productData.append('photo[' + i + ']', file);
            }
            productData.append('product_id',this.$route.params.id)

            axios.post(URL_LOGISTIQUE_API+'addFile', productData)
            .then(res => {
                this.materiel = res.data.data
                this.isLoading = false
                this.getMateriel()
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                this.isLoading = false
            })
        },


        getMateriel() 
        {
            this.isLoading = true
            //console.log('materielhhh')
            axios.get('http://192.168.1.7:8006/api/products/'+this.$route.params.id)
            .then(res => {
                console.log(res.data.data)
                this.materiel = res.data.data
                this.images = res.data.data.photo
                this.isLoading = false
                console.log('materiel',this.materiel)
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                this.isLoading = false
            })
        },

       /*getMaterielType(){
            axios.get('http://192.168.1.7:8006/api/products')
            .then(res => {
                this.materiellist = res.data.data
                this.isLoading = false
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                this.isLoading = false
            })
        },*/


        destroyPath(path) {
            //let app = this
            Swal.fire({
                title: 'Voulez-vous supprimer cette image?',
                text: "cette action est irreversible!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui, supprimer!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.isLoading =  true
                    axios.post(URL_LOGISTIQUE+'deleteFile',{
                        product_id:this.$route.params.id,
                        path:path
                    })
                    .then(res => {
                       // app.getProduct()
                        console.log(res.data.data)
                        this.isLoading =  false
                        Swal.fire(
                            'Supprimé!',
                            'La ligne a été supprimée.',
                            'success'
                        )
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                        this.isLoading =  false
                    })
                }
            })
        },
    }
}
</script>