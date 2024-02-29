import { createRouter , createWebHistory } from 'vue-router';

import Home from "./../components/Home.vue"
import Africa from "./../components/Africa.vue"
import Americas from "./../components/Americas.vue"
import Asia from "./../components/Asia.vue"
import Australia from "./../components/Australia.vue"
import Europe from "./../components/Europe.vue"


const routes = [
    {
        path: '/' ,
        name: 'Home' ,
        component: Home,
    } ,
    {
        path: '/africa' ,
        name: 'africa' ,
        component: Africa,
    } ,
    {
        path: '/americas' ,
        name: 'americas' ,
        component: Americas,
    } ,
    {
        path: '/asia' ,
        name: 'asia' ,
        component: Asia,
    } ,
    {
        path: '/australia' ,
        name: 'australia' ,
        component: Australia,
    } ,
    {
        path: '/europe' ,
        name: 'europe' ,
        component: Europe,
    } ,
    
]

const router = createRouter ({
    history: createWebHistory () ,
    routes ,
})

export default router 