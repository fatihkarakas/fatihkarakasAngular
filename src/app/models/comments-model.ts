export interface CommentsModel {
    id: number;
    fullName: string;
    emailAddress: string;
    content: string;
    isAccept: boolean;
    createDate: Date;
    postId: number;
    parentId: number;
    ipAdres: string;
}