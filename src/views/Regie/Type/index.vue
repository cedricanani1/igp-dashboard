<template>
    <div class="content-page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="d-flex flex-wrap align-items-center justify-content-between mb-4">
                        <div>
                            <h4 class="mb-3">Liste des type</h4>
                            <!-- <p class="mb-0">Use category list as to describe your overall core business from the provided list. <br>
                            Click the name of the category where you want to add a list item. .</p> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="table-responsive rounded mb-3">
                        
                        <table id="example" class="data-table table mb-0 tbl-server-info"  v-if="types.length > 0">
                            <thead class="bg-white text-uppercase">
                                <tr class="ligth ligth-data">
                                    <th>#</th>
                                    <th>Libellé </th>
                                </tr>
                            </thead>
                            <tbody class="ligth-body" text-align="center">
                                <tr v-for="(type,index) in types" :key="index">
                                    <td>{{index + 1}}</td>
                                    <td>{{type.libelle}}</td> 
                                    
                                </tr>
                            </tbody>
                        </table>
                        <div v-if="types.length = 0">
                            <div class="alert alert-danger text-center">
                                pas de type
                            </div>
                        </div>
                    </div>
                    <div class="vld-parent">
                        <loading :active.sync="isLoading" 
                        :can-cancel="true" 
                        :is-full-page="fullPage">
                        </loading>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import {URL_REGIE_API} from '@/config'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import Swal from 'sweetalert2'
export default {
    components: {
            Loading,
    },
    data() {
        return {
            types:[],
            isLoading: false,
            table:null,
            fullPage: true,
            user: this.$store.state.user,
            perms:[]
        };
    },
    mounted(){
        this.user.permissions.forEach(element => {
            this.perms.push(element.name)
        });
        this.getTypes()
    },
    methods:{
        getTypes() {
            let app = this 
            app.isLoading =  true
            axios.get(URL_REGIE_API+'type-panneaux')
            .then(response => {
                
                console.log(response.data)
                app.types = response.data
                app.isLoading =  false
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
            Swal.fire({
                title: 'Voulez-vous supprimer ce type?',
                text: "cette action est irreversible!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Oui, supprimer!'
            }).then((result) => {
            if (result.isConfirmed) {
                this.isLoading =  true
                axios.delete(URL_REGIE_API+'types/'+id)
                .then(response => {
                    console.log(response.data)
                    this.types = response.data
                    this.isLoading =  false
                    Swal.fire(
                        'Supprimé!',
                        'La commande a été supprimée.',
                        'success'
                    )
                     window.location.href = '/index-regie-type'
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