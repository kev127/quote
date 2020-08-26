export class Quote {
    public showDescription:boolean;
    public upvotes:number;
    public downvotes:number;
    constructor(public text: string,public author: string,public completeDate: Date ,public poster:string){
        this.showDescription=false;
        this.upvotes=0;
        this.downvotes=0;
    }
}