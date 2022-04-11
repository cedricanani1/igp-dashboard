<template>
    <div class="content-page">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-5">
                    <div class="card card-transparent card-block card-stretch card-height border-none">
                        <div class="card-body p-0 mt-lg-2 mt-0">
                            <h3 class="mb-3">Bonjour {{ this.$store.state.user.nom }},</h3>
                            <p class="mb-0 mr-4">Voici la liste des statistiques du module e-commerce.</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-12">
                    
                </div>

                <div class="col-lg-12">
                    <button class="btn btn-primary add-list col-lg-2 ml-5" @click="jour">Jour</button>
                    <button class="btn btn-primary add-list col-lg-2 ml-5" @click="semaine">Semaine</button>
                    <button class="btn btn-primary add-list col-lg-2 ml-5" @click="mois">Mois</button>
                    <button class="btn btn-primary add-list col-lg-2 ml-5" @click="annee">Année</button>
                    <div class="card card-block card-stretch card-height">
                        
                        <div class="card-header d-flex align-items-center justify-content-between">
                            <div class="header-title">
                                <h4 class="card-title">Produits vendus</h4>
                            </div>
                                <div class="col-lg-3 header-title" v-if="state == 'jour'">
                                    Date : <input type="date" v-model="payload.jour" @change="getSellByPeriode" class="form-control" >
                                </div>
                                <div class="col-lg-3 header-title" v-if="state == 'mois'">
                                    Mois : <input type="month" v-model="payload.mois" @change="getSellByPeriode" class="form-control" >
                                </div>
                                <div class="col-lg-3 header-title" v-if="state == 'annee'">
                                    Année : <input type="number" v-model="payload.annee" @change="getSellByPeriode" class="form-control" placeholder="YYYY" min="2015" max="2100">
                                </div>
                                <div class="col-lg-3 header-title" v-if="state == 'semaine'">
                                    Debut : <input type="date" v-model="payload.from" @change="periode" class="form-control" >
                                </div>
                                <div class="col-lg-3 header-title" v-if="state == 'semaine'">
                                    Fin : <input type="date" v-model="payload.to" :min="payload.from" step="7"  @change="periode" name="" class="form-control">
                                </div>
                            
                        </div>
                        <div class="card-body">
                            <column-chart :data="data"></column-chart>
                            <!-- <line-chart v-if="periode.to != null" :data="data" label="Nombre de ventes"  xtitle="Temps" ytitle="Nombre"></line-chart> -->
                        </div>
                        
                    </div>
                </div>       
            </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios'
import {URL_LOGISTIQUE_API, URL_COMMERCE} from '@/config'
import Swal from 'sweetalert2'
//import store from '@/store'

export default {
    data(){
        return{
            state: null,
            data:[],
            payload: {
                jour: null,
                mois: null,
                annee: null,
                from: null,
                to: null,
                semaine: 0
            },
            today: null,
            url_com: URL_COMMERCE,
        }
    },
    computed: {
        modalShow(){
            return this.productModal
        }
    },
    methods: {
        jour(){
            this.state = 'jour'
        },
        mois(){
            this.state = 'mois'
        },
        annee(){
            this.state = 'annee'
        },
        semaine(){
            this.state = 'semaine'
        },
        periode(){
            console.log(this.payload.from);
            if (this.payload.from != null) {
                if (this.payload.to != null) {
                    this.payload.jour = null
                    this.payload.semaine = 1
                    this.getSellByPeriode()
                } else {
                    Swal.fire('Avertissement !', 'Entrez la date de fin')
                }
            } else {
                Swal.fire('Avertissement !', 'Entrez la date de debut')
            }
        },
        getSellByPeriode(){
            let app = this
            if (app.payload.annee != null) {
                app.payload.annee = app.payload.annee.split('-')[0]
            } 
                    axios.post(URL_LOGISTIQUE_API+'sellingStat', app.payload)
            .then(function (reponse){
                console.log('rep',reponse.data);
                reponse.data.data.forEach(element => {
                    element.stack = 'stack1'
                });
                app.data = reponse.data.data
            })
            .catch(function (error){
                console.log('rep',error);
            })
        },
        
    },
    mounted(){
        this.today = new Date().toJSON().slice(0,10);
        console.log('user',this.$store.state.user)
        console.log('token',this.$store.state.token)
       
    },
}
</script>
