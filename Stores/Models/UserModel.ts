import { Instance, types } from "mobx-state-tree"

export const UserModel = types
.model("UserModel")
.props({
    id:types.identifier,
    name:types.maybe(types.string),
    email:types.maybe(types.string),
    score:types.optional(types.number,0),
    password:types.maybe(types.string)
})
.actions((self)=>({
    updateScore(newScore:number){
        self.score+=newScore
    }
}))

export interface UserStore extends Instance<typeof UserModel> {}
