const kafka = require("./client");

async function init(){
    const admin=kafka.admin();
    console.log("admin connecting...");
    await admin.connect();

    console.log("admin connected...");

    console.log("admin creating topic...");

    await admin.createTopics({
        topics:[
            {
                topic:'hiddenLeaf',
                numPartitions:2
            }
        ]
    })

    console.log('topic created successfully');

    console.log("admin disconnecting");

    await admin.disconnect();

    console.log("admin disconnected...");
}

init();