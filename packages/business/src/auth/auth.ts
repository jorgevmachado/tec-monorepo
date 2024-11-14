import { GeekNest } from '@/api/geek-nest';

import { SignInParams, SignUpParams, UpdateParams, User } from '@/auth/interface';

export class Auth {
    constructor(private geekNest: GeekNest) {}

    public async signUp(params: SignUpParams): Promise<string> {
        return this.geekNest.signUp(params);
    }

    public async signIn(params: SignInParams): Promise<string> {
        return this.geekNest.signIn(params).then((res) => res.token);
    }

    public async get(id: string): Promise<User> {
        return this.geekNest.getUser(id);
    }

    public async me(): Promise<User> {
        return this.geekNest.me();
    }

    public async update(id: string, params: UpdateParams): Promise<User> {
        return this.geekNest.updateUser(id, params);
    }
}