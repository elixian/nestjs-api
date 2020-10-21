export class Config{
    //Mongo config
    static MONGO_URI: string = process.env.MONGO_URI || 'mongodb://localhost/task';

    //Node environnement
    static NODE_HOST: string = process.env.NODE_HOST || '0.0.0.0';
    static NODE_PORT: string = process.env.NODE_PORT || '3000';

    //PassportJS
    static JWT_SECRET : string = process.env.JWT_SECRET || 'pozetaklop';
}