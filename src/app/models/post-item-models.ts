export interface PostItems {
    id: number;
    picturePath: string;
    title: string;
    description: string;
    shortContent: string;
    fullContent: string;
    categoryId: number;
    categoryName: string;
    viewCount: number;
    isActive: boolean;
    isDelete: boolean;
    createDate: Date;
    updateDate: Date;
    allowComment: boolean;
    comments: CommentItems[];
}

export interface CommentItems {
    id: number;
    fullName: string;
    content: string;
    emailAddress: string;
    isAccept: boolean;
    createDate: Date;
    postId: number;
    parentId: number;
    ipAdres: string;
}
