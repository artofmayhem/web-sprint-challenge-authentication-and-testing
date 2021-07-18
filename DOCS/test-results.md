server.js > auth endpoints > [POST] /api/auth/register [2] responds with the new user with a bcrypted password on success server.js > auth endpoints > [POST] /api/auth/register [2] responds with the new user with a bcrypted password on success

Error: expect(received).toHaveProperty(path)
Expected path: "id"
Received path: []
Received value: {"message": "You've been successfully registered"}
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:42:22)
    at processTicksAndRejections 


    server.js > jokes endpoint > [GET] /api/jokes [16] responds with an error status code on missing token server.js > jokes endpoint > [GET] /api/jokes [16] responds with an error status code on missing token

    Error: expect(received).toMatch(expected)
Expected pattern: /4|5/
Received string:  "200"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:139:33)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

  
    server.js > jokes endpoint > [GET] /api/jokes [17] responds with a "token required" message on missing token server.js > jokes endpoint > [GET] /api/jokes [17] responds with a "token required" message on missing token

    Expected: StringMatching /required/i
Received: "[{\"id\":\"0189hNRf2g\",\"joke\":\"I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.\"},{\"id\":\"08EQZ8EQukb\",\"joke\":\"Did you hear about the guy whose whole left side was cut off? He's all right now.\"},{\"id\":\"08xHQCdx5Ed\",\"joke\":\"Why didn’t the skeleton cross the road? Because he had no guts.\"}]"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:143:42)
    at processTicksAndRejections 

    server.js > jokes endpoint > [GET] /api/jokes [19] responds with a "token invalid" message on invalid token server.js > jokes endpoint > [GET] /api/jokes [19] responds with a "token invalid" message on invalid token

    Expected: StringMatching /invalid/i
Received: "[{\"id\":\"0189hNRf2g\",\"joke\":\"I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.\"},{\"id\":\"08EQZ8EQukb\",\"joke\":\"Did you hear about the guy whose whole left side was cut off? He's all right now.\"},{\"id\":\"08xHQCdx5Ed\",\"joke\":\"Why didn’t the skeleton cross the road? Because he had no guts.\"}]"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:151:42)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)