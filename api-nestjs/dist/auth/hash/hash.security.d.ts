export declare class HashSecurity {
    static genHashPassword(password: string): Promise<string>;
    static validatePassword(password: string, hashed: string): Promise<boolean>;
}
