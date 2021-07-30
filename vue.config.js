// 파일생성 vue.config.js : 환경적인 요소를 설정하는 곳
module.exports = {
    devServer : {
        /*
        proxy : {
            '/api' : {
                target : 'http://127.0.0.1:3000',
                changeOrigin :true,
                legLevel : 'debug'
            }
        },
        */
        port : 9090
    }
}