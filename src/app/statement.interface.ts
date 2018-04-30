export interface cdbStatement {
    id:string;
    key:string;
    doc : {
    _id: string;
    _rev: string;
    id: string;
    name: string;
    value: string;
    timestamp: Date
    }
}