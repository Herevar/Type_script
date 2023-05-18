//npm i -g typescript  //trzeba paczke
// tsc --version

// npm i -D ts-node  //narzedzie deweloperskie zeby w ogole odpalic w ts, czyli jak uruchamiamy ts-node xxxxx.ts
// ale mozliwe ze trzeba (trzeba): npm i -g ts-node  (jezeli ts-node normalnie nie zadziała to globalnie trzeba odpalanie tego)

// npm i -D ts-node-Dev    // jak nodemon -> czyli na bierzaco wczytuje zmiany ; uruchamiamy to : tsnd xxx.js
    //oczywiscie w json nie moze zrobic "start:" ts-node xxxx.ts
    //                                  "start:dev:" tsnd xxxx.ts    // no i pozniej npm start itd
    

//ts-node index.ts

// trzeba dodac w tasks.json
// {
//     "version": "2.0.0",
//     "tasks": [
//         {
//             "label": "typescript",
//             "type": "typescript",
//             "tsconfig": "tsconfig.json",
//             "option": "watch",
//             "auto": true,
//             "problemMatcher": [
//                 "$tsc-watch"
//             ]
//         }
//     ]
// }