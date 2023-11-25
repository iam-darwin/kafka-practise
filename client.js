const {Kafka}=require('kafkajs')

const kafka=new Kafka({
    clientId:'kafkaPractise',
    brokers:['192.168.1.161:9092']
})

module.exports=kafka

