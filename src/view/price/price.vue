<template>
    <div class="price">
        <Card class="price-card" title="欢迎登录" :bordered="false">
            <Input class="price-ip1" v-model="value" placeholder="Enter something..." />
        </Card>
        

    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }
        }
    }
</script>
<style lang="less">
    @import './price.less';
</style>
