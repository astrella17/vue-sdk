// 1. 설치한 모듈 가져오기
import { createWebHistory, createRouter } from "vue-router";

// 2. components에 있는 컴포넌트 필요한 것 가져오기
import Main from '@/components/Main.vue';
import About from '@/components/About.vue';
import ItemInsert from '@/components/ItemInsert.vue';
import ItemSelect from '@/components/ItemSelect.vue';
import ItemUpdate from '@/components/ItemUpdate.vue';
import ItemHistory from '@/components/ItemHistory.vue';
import OrderInsert from '@/components/OrderInsert.vue';
import OrderList from '@/components/OrderList.vue';
import Board from '@/components/Board.vue';
import BoardInsert from '@/components/BoardInsert.vue';
import BoardContent from '@/components/BoardContent.vue';


// 3. 주소설정하기
// 127.0.0.1:8080/iteminsert
const routes = [
    {path :'/', name:'Main', component:Main},
    {path :'/about', name:'About', component:About},
    {path :'/iteminsert', name:'ItemInsert', component:ItemInsert},
    {path :'/itemselect', name:'ItemSelect', component:ItemSelect},
    {path :'/itemupdate', name:'ItemUpdate', component:ItemUpdate},
    {path :'/itemhistory', name:'ItemHistory', component:ItemHistory},
    {path :'/orderinsert', name:'OrderInsert', component:OrderInsert},
    {path :'/orderlist', name:'OrderList', component:OrderList},
    {path :'/board', name:'Board', component:Board},
    {path :'/boardinsert', name:'BoardInsert', component:BoardInsert},
    {path :'/boardcontent', name:'BoardContent', component:BoardContent},
];

// 4. router적용
const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;
