addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(req) {
    const method = req.method;
    log("req.method:", method, req);
    try {
        const rspData = {
            time: new Date().getTime(),
            name: '测试'
        };

        return Response(JSON.stringify(rspData), {
            headers: {
                "content-type": "text/html;charset=UTF-8",
            },
        })
    } catch (e) {
        log("Got Exception: " + e.stack);
        return Response("Got Exception: " + e.message, {
            headers: {
                "content-type": "text/html;charset=UTF-8",
            },
        });
    }
}
