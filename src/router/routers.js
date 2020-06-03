const pricepg = ()=>import('../view/main/main.vue');

export default[
    {
        path:'/price',
        name:'price',
        meta:{
            title:'价格'
        },
        component:pricepg
    },
]