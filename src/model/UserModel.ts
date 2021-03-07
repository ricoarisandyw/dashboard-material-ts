export default interface UserModel {
  id: number
  name: string
  email: string
  password: string
  status: string
  roles_id: number
  role: string
  created_at: Date
  updated_at: Date
}