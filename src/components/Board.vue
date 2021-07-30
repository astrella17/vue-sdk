<template>
    <div>
        <h3>Q&A게시판</h3>
        <hr />
        <router-link to="/boardinsert">글쓰기</router-link>
        <hr />
        <table border="1">
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
                <th>날짜</th>
                <th>이미지</th>
            </tr>
            <tr v-for="(one, idx) in itemlist" v-bind:key="one"> 
                <td>{{ idx + 1 }} {{ one._id }}</td>
                <td><router-link :to="`/boardcontent?_id=${one._id}`">{{one.title}}</router-link></td>
                <td>{{one.writer}}</td>
                <td>{{one.hit}}</td>
                <td>{{one.regdate}}</td>
                <td><img :src="`http://127.0.0.1:13000/board/image?_id=${one._id}`" style="width:50px;height:50px" /></td>
            </tr>
        </table>   
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                itemlist : [], // 여기에 생성해야 화면에 사용가능
            }
        },
        async mounted() {
            const url =  `http://127.0.0.1:13000/board/select`;
            const response = await axios.get(url); // node-sdk호출
            console.log(response);
            if(response.data.ret === 1) {
                this.itemlist = response.data.data;
            }
        }
    }
</script>

<style scoped>

</style>