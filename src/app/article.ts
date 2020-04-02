export class Article {
    title: string;
    link: string;
    votes: number;
    constructor(title: string, link: string, votes: number) {
        this.title = title;
        this.link = link;
        this.votes =
            votes || 0;
    }
    voteup() {
        this.votes++;
    }
    votedown() {
        this.votes--;
        if (this.votes < 0)
            this.votes = 0;
    }

}