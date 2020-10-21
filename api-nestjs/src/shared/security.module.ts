import { HashSecurity } from './hash/hash.security';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [],
    providers: [HashSecurity],
    exports:[HashSecurity]
})
export class SecurityModule { }
