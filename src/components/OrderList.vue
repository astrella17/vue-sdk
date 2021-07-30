<template>
    <div>
        <h3>주문내역확인</h3>
        <hr />

        <div v-for="one in itemlist" v-bind:key="one">
            주문번호 : {{one.order.orderID}}, 주문수량 : {{one.order.orderCnt}}
            물품명 : {{one.item.name}}, 물품가격 : {{one.item.price}}
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                itemlist:[]
            }
        },
        async created(){
            const url=`http://127.0.0.1:13000/api/orderOrderItems?cst=bbb`
            const response = await axios.get(url);
            console.log(response.data.data);
            this.itemlist = response.data.data;
        }
        
    }
</script>

<style scoped>

</style>