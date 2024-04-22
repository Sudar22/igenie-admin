export interface CategoryType {
    name: string;
    alias: string;
    parent: number | null;
    fileImage: string | null;
    enable: boolean;
    allParentIDs:string,
    childern:string  }