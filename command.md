# Setting Up Kafka with Docker

This guide demonstrates how to set up Zookeeper and Kafka containers using Docker.

## Start Zookeeper Container

To start the Zookeeper container and expose port 2181, use the following command:

```bash
docker run -p 2181:2181 zookeeper

docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
