<template>
    <div class="shopee">
        <Form :v-model="form">
            <FormItem prop='email'>
                <input v-model="form.email" placeholder="价格">
                </input>
            </FormItem>
        </Form>
    </div>
</template>



<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<style scoped>

</style>