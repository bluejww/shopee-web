const pricepg = ()=>import('../view/price/price.vue');

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