const kafka = require("./client");

async function createProducer() {
    const producer = kafka.producer();

    console.log("producer connecting");

    await producer.connect();

    console.log("producer connected");

    console.log("producer sending message");

    const topicMessages = [
        {
            topic: 'hiddenLeaf',
            messages: [
                {
                    key: 'Jinchuriki',
                    value: "Naruto Uzumaki"
                },
            ],
        },
        {
            topic: 'hiddenLeaf',
            messages: [
                {
                    key: "Sharingan",
                    value: "Sasuke Uchiha"
                }
            ]
        },
        {
            topic: 'hiddenLeaf',
            messages: [
                {
                    key: "medicalNinja",
                    value: "Sakura"
                }
            ]
        }
    ];

    await producer.sendBatch({ topicMessages });

    console.log("producer sent message...");

    console.log("disconnecting the producer");

    await producer.disconnect();
}

createProducer();
