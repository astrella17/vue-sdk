<template>
    <div>
        <h3>게시판 내용</h3>
        <hr />
        <div v-show="toggle === true">
            제목 : {{boarditem.title}}<br />
            내용 : {{boarditem.content}}<br />
            조회수 : {{boarditem.hit}}<br />
            작성자 : {{boarditem.writer}}<br />
            날짜 : {{boarditem.regdate}}<br />
            이미지 : <img :src="`http://127.0.0.1:13000/board/image?_id=${boarditem._id}`" style="width:50px;height:50px" /><br />
        </div>
        <div v-show="toggle === false">
            제목 : <input type="text" v-model="boarditem.title" /><br />
            내용 : <input type="text" v-model="boarditem.content" /><br />
            조회수 : <input type="text" v-model="boarditem.hit" /><br />
            작성자 : <input type="text" v-model="boarditem.writer" /><br />
            날짜 : {{boarditem.regdate}}<br />
            이미지 : <img :src="`http://127.0.0.1:13000/board/image?_id=${boarditem._id}`" style="width:50px;height:50px" /><br />
            <input type="button" @click="updateBoard(boarditem._id)" value="수정완료" />
        </div>

        <input type="button" @click="deleteBoard(boarditem._id)"  value="삭제" />
        <input type="button" @click="toggleBtn"  value="수정" />
        <router-link to="/board">목록으로 이동하기</router-link>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        methods : {
            async updateBoard(_id) {
                // 1. header 설정 하기
                const headers = { "Content-Type": "application/json" };

                const obj  = {
                    _id : _id,
                    title : this.boarditem.title,
                    content : this.boarditem.content,
                    writer : this.boarditem.writer,
                    hit : this.boarditem.hit,
                }

                // console.log(obj);
                //get(조회), post(등록), put(변경), delete(삭제)
                const url = `http://127.0.0.1:13000/board/update`;
                const response = await axios.put(url, obj, headers);
                console.log(response);

                if (response.data.ret === 1 ) {
                    alert(response.data.data);
                    this.$router.push({path:'/board'});
                }
            },
            async deleteBoard(_id){
                const url = `http://127.0.0.1:13000/board/delete?_id=${_id}`;
                const response = await axios.delete(url);
                console.log(response);
                if(response.data.ret === 1) {
                    alert(response.data.data);
                    this.$router.push({path:'/board'}) //삭제 후 페이지 이동
                }
            },
            toggleBtn(){
                //true -> false로 false-> true로 변환
                this.toggle = !this.toggle;
            }
        },
        data() {
            return {
                boarditem : {
                    title:'',
                    content:'',
                    writer:'',
                    hit:'',
                },
                toggle : true,
            }
        },
        async created() {
            console.log(this.$route.query._id);
            const url = `http://127.0.0.1:13000/board/selectone?_id=${this.$route.query._id}`;
            const response = await axios.get(url);
            console.log(response);
            if(response.data.ret === 1) {
                this.boarditem = response.data.data;  // {      }
            }
        }
    }
</script>

<style scoped>

</style>