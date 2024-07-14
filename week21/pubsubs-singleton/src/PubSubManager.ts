import { createClient, RedisClientType } from "redis";

export class PubSubManager {
    
    private static instace: PubSubManager;
    private redisClient: RedisClientType;
    private subscriptions: Map<string, string[]>;

    // private constructor to prevent direct instace creation
    private constructor() {
        this.redisClient = createClient()
        this.redisClient.connect()
        this.subscriptions = new Map()
    }

    public static getInstance(): PubSubManager {
        if (!PubSubManager.instace) {
            PubSubManager.instace = new PubSubManager()
        }
        return PubSubManager.instace
    }

    public userSubscribe(userId: string, stock: string) {
        if (!this.subscriptions.has(stock)) {
            this.subscriptions.set(stock, [])
        }
        this.subscriptions.get(stock)?.push(userId)

        if (this.subscriptions.get(stock)?.length === 1) {
            this.redisClient.subscribe(stock, (message) => {
                this.handleMessage(stock, message);
            })
            console.log(`Subscribed to Redis channel: ${stock}`);
        }
    }

    public userUnSubscribe(userId: string, stock: string) {
        this.subscriptions.set(stock, this.subscriptions.get(stock)?.filter((sub) => sub !== userId) || []);

        if (this.subscriptions.get(stock)?.length === 0) {
            this.redisClient.unsubscribe(stock);
            console.log(`UnSubscribed to Redis channel: ${stock}`);
        }
    }

    // method that will be called when a message is published to the subscribed channel
    private handleMessage(stock: string, message: string) {
        console.log(`Message received on channel ${stock}: ${message}`);
        this.subscriptions.get(stock)?.forEach((sub) => {
            console.log(`Sending message to user: ${sub}`);
        });
    }

    // Cleanup on instance destruction
    public async disconnect() {
        await this.redisClient.quit();
    }
}