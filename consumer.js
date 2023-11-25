const kafka = require("./client");

async function consumeMessages(){
    const consumer =kafka.consumer({ groupId: 'my-group' })

    console.log("consumer connecting");

    await consumer.connect();

    console.log('consumer subscring to topic');

    await consumer.subscribe({
        topics:["hiddenLeaf"],
        fromBeginning:true
    })

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                topicName:`${topic}`,
                partitionRouter:`${partition}`,
                key: message.key.toString(),
                value: message.value.toString(),
                headers: message.headers,
            })
        },
      });

}

consumeMessages();