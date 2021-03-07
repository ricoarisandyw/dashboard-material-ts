import UserModel from "./UserModel";

export default interface InstitutionModel {
    id: number
    name: string
    address: string
    photo: string
    admin_id?: string
    admin?: UserModel
    created_at?: Date
    updated_at?: Date
    created_by?: Date
    ins_creator?: number
    updated_by?: number
    ins_updator?: UserModel
}