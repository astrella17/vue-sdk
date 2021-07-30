<template>
    <div>
        <h3>게시판 글쓰기(이미지첨부)</h3>
        <hr />
        글제목 : <input type="text" v-model="title" /><br />
        글내용 : <input type="text" v-model="content" /><br />
        작성자 : <input type="text" v-model="writer" /><br />
        이미지첨부: <input type="file" @change="handleImage" /><br />
        <input type="button" @click="sendData" value="글쓰기" />
        <router-link to="/board">목록으로 이동하기</router-link>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        methods:{
            async sendData(){
                // 1. header 설정 하기
                const headers = { "Content-Type": "multipart/form-data" };

                // 2. 전달할 데이터 object로 생성
                const formData = new FormData();
                formData.append("title", this.title);
                formData.append("content", this.content);
                formData.append("writer", this.writer);
                formData.append("img", this.img);

                // 3. axios를 이용하여 전송
                const url = `http://127.0.0.1:13000/board/insert`;
                const response = await axios.post(url, formData , headers);
                
                // 4. 결과확인
                console.log(response);

                // 5. 페이지 전환
                this.$router.push({path:'/board'});
            },
            handleImage(e) {
                // e에 담겨있는 파일의 정보를 prop변수 img에 넣어줌
                // 이미지는 v-model로 추가할 수 없기 때문에
                console.log(e);
                this.img = e.target.files[0];
            }
        },
        data() {
            return {
                title : '',
                content : '',
                writer : '',
                img : '',
            }
        }

    }
</script>

<style scoped>

</style>