addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})
const resposeMsgs = [
    '您好，客服正忙，请稍后联系。',
    '您好，正在处理您的消息，请稍等。',
    '您好，暂时无法回答您的问题。',
    '您好，当前访问人数过多，请稍后再试。'
];
async function handleRequest(req) {
    const method = req.method;
    log("req.method:", method, req);
    try {

        const rspData = {
            code: 1,
            msg: '',
            data: {
                time: new Date().getTime(),
                chatMsg: ''
            }
        };
        // if (method.toLowerCase() === 'post') {
            let randomIndex = Math.floor(Math.random() * resposeMsgs.length);
            rspData.data.chatMsg = `[自动回复] ${resposeMsgs[randomIndex]}`;
            return Response(JSON.stringify(rspData), {
                headers: {
                    // "content-type": "application/json",
                    // "content-type" : "multipart/form-data"
                    "content-type": "text/html;charset=UTF-8",
                },
            })
        // } else {
        //     return Response({
        //         msg: '只支持post方式'
        //     }, {
        //         headers: {
        //             "content-type": "text/html;charset=UTF-8",
        //         },
        //     })
        // }

    } catch (e) {
        log("Got Exception: " + e.stack);
        return Response("Got Exception: " + e.message, {
            headers: {
                "content-type": "text/html;charset=UTF-8",
            },
        });
    }
}
