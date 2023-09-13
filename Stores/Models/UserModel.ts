import { Instance, types } from "mobx-state-tree"
import { COLORPARTICIPANTS, fastHash } from "../../Utils/helpers"

export const UserModel = types
.model("UserModel")
.props({
    email:types.identifier,
    name:types.string,
    score:types.optional(types.number,0),
    password:types.maybe(types.string)
})
.views((self) => ({
    get color() {
      const hash = fastHash(self.email)
      return COLORPARTICIPANTS[hash % COLORPARTICIPANTS.length]
    },
  }))
.actions((self)=>({
    updateScore(newScore:number){
        self.score+=newScore
    }
}))

export interface UserStore extends Instance<typeof UserModel> {}
