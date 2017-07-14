export class Post {
    id: string;
    uid: string;
    username: string;
    message: string;

    constructor(id, uid, username, message) {
        this.id = id || '';
        this.uid = uid || '';
        this.username = username || '';
        this.message = message || '';
    }
}