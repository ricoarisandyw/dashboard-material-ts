import InstitutionModel from "./InstitutionModel";
import UserModel from "./UserModel";

export default interface ClassModel {
    id: number
    name: string
    detail: string
    code: string
    institution_id: number
    institution: InstitutionModel
    hr_teacher_id: number
    hr_teacher: UserModel
    created_at: Date
    updated_at: Date
    created_by: number
    updated_by: UserModel
    class_updator: UserModel
}