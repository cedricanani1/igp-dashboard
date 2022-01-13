<template>
    <div class="content-page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <div>
                            <h4 class="mb-3">Liste des Produits</h4>
                            <p class="mb-0">Use category list as to describe your overall core business from the provided list. <br>
                            Click the name of the category where you want to add a list item. .</p>
                        </div>
                        <router-link to="/create-e-commerce-product" class="btn btn-primary add-list"><i class="las la-plus mr-3"></i> Ajouter un produit </router-link>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="table-responsive rounded mb-3">
                    <table class="data-table table mb-0 tbl-server-info">
                        <thead class="bg-white text-uppercase">
                            <tr class="ligth ligth-data">
                                <th>Libelle</th>
                                <th>Prix</th>
                                <th>Stocks</th>
                                <th>Categories</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="ligth-body">
                            <tr v-for="(stock,index) in stocks" :key="index">
                                <td>{{stock.libelle}}</td>
                                <td>{{stock.price}}</td>   
                                <td>{{stock.stock}}</td>
                                <td>{{stock.type.libelle}}</td>
                                <td>
                                    <div class="d-flex align-items-center list-action">
                                        <router-link :to="'/show-e-commerce-product/'+stock.id" 
                                                    class="badge badge-info mr-2" data-toggle="tooltip" data-placement="top" 
                                                    title="" data-original-title="View"><i class="fa fa-eye mr-0"></i>
                                        </router-link>
                                        <router-link :to="'/edit-e-commerce-product/'+stock.id" 
                                                    class="badge bg-success mr-2" data-toggle="tooltip" data-placement="top" 
                                                    title="" data-original-title="Edit"><i class="ri-pencil-line mr-0"></i>
                                        </router-link>
                                        <button class="badge bg-warning mr-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"
                                            @click="destroy(stock.id)"><i class="ri-delete-bin-line mr-0"></i></button>
                                    </div>
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
                <div class="vld-parent">
                    <loading :active.sync="isLoading" 
                    :can-cancel="true" 
                    :is-full-page="fullPage"></loading>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import {URL_COMMERCE_API} from '@/config'
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
            stocks:{},
            isLoading: false,
            fullPage: true
        };
    },
    mounted(){
        this.getStores()
    },
    methods:{
        getStores() {
            this.isLoading =  true
            axios.get(URL_COMMERCE_API+'products')
            .then(response => {
                console.log(response.data)
                this.stocks = response.data
                this.isLoading =  false
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                Swal.fire(
                        'Erreur!',
                        'Une erreur s\'est produite lors de la recuperation des données !',
                        'error'
                )
                this.isLoading =  false
            })
        },
        destroy(id) {
            let app = this
            Swal.fire({
                title: 'Voulez-vous supprimer cette categorie?',
                text: "cette action est irreversible!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui, supprimer!'
            }).then((result) => {
            if (result.isConfirmed) {
                this.isLoading =  true
                axios.delete(URL_COMMERCE_API+'product-types/'+id)
                .then(response => {
                    app.productTypes()
                    console.log(response.data)
                    this.stocks = response.data
                    this.isLoading =  false
                    Swal.fire(
                        'Supprimé!',
                        'La categorie a été supprimée.',
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