export class Config{
    static MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost/task';
}