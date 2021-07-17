server.js > auth endpoints > [POST] /api/auth/register [2] responds with the new user with a bcrypted password on success server.js > auth endpoints > [POST] /api/auth/register [2] responds with the new user with a bcrypted password on success

Error: expect(received).toHaveProperty(path)
Expected path: "id"
Received path: []
Received value: {"message": "You've been successfully registered"}
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:42:22)
    at processTicksAndRejections 


  server.js > auth endpoints > [POST] /api/auth/register [1] adds a new user with a bcrypted password to the users table on success server.js > auth endpoints > [POST] /api/auth/register [1] adds a new user with a bcrypted password to the users table on success

  Error: expect(received).toHaveProperty(path)
Matcher error: received value must not be null nor undefined
Received has value: undefined
    at Object.<anonymous>   

    server.js > auth endpoints > [POST] /api/auth/register [5] responds with "username taken" message if username exists in users table server.js > auth endpoints > [POST] /api/auth/register [5] responds with "username taken" message if username exists in users table

    Error: expect(received).toEqual(expected) // deep equality
Expected: StringMatching /taken/i
Received: "{\"message\":\"You've been successfully registered\"}"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:60:38)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

    Server.js > auth endpoints > [POST] /api/auth/register [4] responds with an error status code if username exists in users table server.js > auth endpoints > [POST] /api/auth/register [4] responds with an error status code if username exists in users table

    Error: expect(received).toMatch(expected)
Expected pattern: /4|5/
Received string:  "200"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:55:29)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

    server.js > auth endpoints > [POST] /api/auth/login [9] responds with a welcome message and a token on successful login server.js > auth endpoints > [POST] /api/auth/login [9] responds with a welcome message and a token on successful login

    Error: expect(received).toHaveProperty(path)
Expected path: "token"
Received path: []
Received value: {"message": "You've been successfully registered"}

server.js > auth endpoints > [POST] /api/auth/login [12] responds with a proper status code on non-existing username server.js > auth endpoints > [POST] /api/auth/login [12] responds with a proper status code on non-existing username

Error: expect(received).toMatch(expected)
Expected pattern: /4|5/
Received string:  "200"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:111:33)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

    server.js > jokes endpoint > [GET] /api/jokes [16] responds with an error status code on missing token server.js > jokes endpoint > [GET] /api/jokes [16] responds with an error status code on missing token

    Error: expect(received).toMatch(expected)
Expected pattern: /4|5/
Received string:  "200"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:139:33)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

   server.js > auth endpoints > [POST] /api/auth/login [13] responds with "invalid credentials" message on non-existing username server.js > auth endpoints > [POST] /api/auth/login [13] responds with "invalid credentials" message on non-existing username

   Error: expect(received).toEqual(expected) // deep equality
Expected: StringMatching /invalid/i
Received: "{\"message\":\"You've been successfully registered\"}"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:115:42)
    at processTicksAndRejections  

    server.js > jokes endpoint > [GET] /api/jokes [18] responds with an error status code on invalid token server.js > jokes endpoint > [GET] /api/jokes [18] responds with an error status code on invalid token

    Error: expect(received).toMatch(expected)
Expected pattern: /4|5/
Received string:  "200"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:147:33)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

    server.js > auth endpoints > [POST] /api/auth/login [15] responds with "invalid credentials" message on invalid password server.js > auth endpoints > [POST] /api/auth/login [15] responds with "invalid credentials" message on invalid password

    Expected: StringMatching /invalid/i
Received: "{\"message\":\"You've been successfully registered\"}"
    at Object.<anonymous> (/home/codegrade/student/codegrade_mvp.test.js:123:42)
    at processTicksAndRejections (internal/process/task_queues.js:97:5)

    server.js > jokes endpoint > [GET] /api/jokes [20] responds with the jokes on valid token server.js > jokes endpoint > [GET] /api/jokes [20] responds with the jokes on valid token

    TypeError: Invalid value "undefined" for header "Authorization"TypeError [ERR_HTTP_INVALID_HEADER_VALUE]: Invalid value "undefined" for header "Authorization"
    at ClientRequest.setHeader (_http_outgoing.js:533:3)
    at Test.request (/home/codegrade/student/node_modules/superagent/src/node/index.js:829:11)

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