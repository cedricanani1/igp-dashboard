<template>
    <div class="content-page">
        <div class="container-fluid add-form-list">
            <div class="row">
                <div class="col-sm-12">
                        <div class="card-body">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Détails</a>
                                </li>
                                
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="card">
                                        <div class="card-header d-flex justify-content-between">
                                            <div class="header-title">
                                                <h4 class="card-title">Détail d'un type</h4>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <form action="page-list-category.html" @submit.prevent="update" data-toggle="validator">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <label>Libelle *</label>
                                                            <input type="text" v-model="type.libelle" class="form-control" placeholder="Entrer libelle" readonly>
                                                        </div>
                                                        
                                                    </div>                               
                                                </div>                            
                                                <button type="submit" class="btn btn-primary mr-2">Modifier</button>
                                                <button type="reset" class="btn btn-danger">Reinitialiser</button>
                                            </form>
                                        </div>
                                    </div>
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
import {URL_REGIE_API} from '@/config'
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
//import Swal from 'sweetalert2'

export default {
    components: {
           Loading
    },
    data() {
        return {
            regions:[],
            villes:[],
            type:{},
            panels:[],
            isLoading: false,
            fullPage: true,
            user: this.$store.state.user,
            perms:[]
        };
    },
    mounted(){
        this.user.permissions.forEach(element => {
            this.perms.push(element.name)
        });

        this.getType()
    },

    methods:{
        
        getType() {
            this.isLoading = true
            axios.get(URL_REGIE_API+'type-panneau/'+this.$route.params.id)
            .then(response => {
                console.log('gettype',response)
                this.type = response.data.data
                this.isLoading = false
            })
            .catch(error => {
                console.log(error)
                this.errored = true
                this.isLoading = false
            })
        },
        update(){
            this.$router.push('/edit-regie-type/'+this.$route.params.id)
        }
    }
}
</script>