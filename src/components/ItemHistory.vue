<template>
    <div>
        <h3>물품변경이력 조회</h3>
        <hr />

        <div v-for="one in itemlist" v-bind:key="one">
            {{new Date(one.Value.blockDate)}}
            {{one.Key}}
            {{one.Value.name}}
            {{one.Value.content}}
            {{one.Value.price}}
            {{one.Value.quantity}}
            {{one.Value.seller}}
            {{one.Value.isDelete}} <br />
        </div>

        <hr />
        <el-timeline>
            <el-timeline-item v-for="(one, index) in itemlist"
                :key="index" :timestamp="new Date(one.Value.blockDate)">
                    물품번호: {{one.Key}},
                    물품명: {{one.Value.name}},
                    물품내용: {{one.Value.content}},
                    물품가격: {{one.Value.price}},
                    수량: {{one.Value.quantity}},
                    판매자: {{one.Value.seller}},
                    삭제유무: {{one.Value.isDelete}}
            </el-timeline-item>
        </el-timeline>              

    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                itemlist : [],
            }
        },
        async mounted(){
            const id = this.$route.query.id
            // http://127.0.0.1:8080/itemhistory?id=ITEM0111
            const url = `http://127.0.0.1:13000/api/readItemHistory?seller=aaa&id=${id}`
            const response = await axios.get(url);
            console.log(response);
            if(response.data.ret === 1) {
                this.itemlist = response.data.data;
            }
        }
    }
</script>

<style scoped>

</style>