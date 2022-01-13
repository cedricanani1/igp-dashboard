<template>
    <div class="content-page">
        <div class="container-fluid add-form-list">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Modifier Produit Logistique</h4>
                            </div>
                        </div>
                        <div class="card-body">
                       <form action="page-list-category.html" @submit.prevent="update" data-toggle="validator">
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
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Categorie *</label>
                                            <select v-model="materiel.categorie_id" class="form-control">
                                                <option v-for="(materiel,index) in materiellist" :key="index" :value="materiel.id"> {{materiel.libelle}} </option>
                                            </select>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>
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
                                    <!-- <div class="col-md-6">
                                        <div class="form-group">
                                            <label>Photo *</label>
                                            <input type="file" ref="photo"  class="form-control" required>
                                            <div class="help-block with-errors"></div>
                                        </div>
                                    </div>-->                          
                                </div>                            
                                <button type="submit" class="btn btn-primary mr-2">Enregistrer</button>
                                <button type="reset" class="btn btn-danger">reinitialiser</button>
                            </form>
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
//import {URL_LOGISTIQUE_API} from '@/config'
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
            materiel:{},
            materiellist:[],
            isLoading: false,
            fullPage: true
        };
    },
    mounted(){
        this.getProductType()
        this.getProduct()
    },


    methods:{
        update() {


            this.isLoading = true
            
            axios.put('http://192.168.1.7:8006/api/products/'+this.$route.params.id, this.materiel)
            .then(res => {
                console.log(res.data.data)
                this.materiel = res.data.data
               // console.log('materiel',res.data.data)
                this.isLoading = false
                
                if (res.data.state) {
                    this.$router.push('/materiel-stock-products')
                    Swal.fire(
                        'Operation Effectuée!',
                        'Produit crée avec succès.',
                        'success'
                    )
                }
                //location.replace('#')
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                this.isLoading = false
            })
        },
        getProduct(){
            this.isLoading = true
            axios.get('http://192.168.1.7:8006/api/products/'+this.$route.params.id)
            .then(res => {
                this.materiel = res.data.data
                this.isLoading = false
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                this.isLoading = false
            })
        },
        getProductType(){
            this.isLoading = true
            axios.get('http://192.168.1.7:8006/api/categories/')
            .then(res => {
                this.materiellist = res.data
                this.isLoading = false
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                this.isLoading = false
            })
        }
    }
}
</script>