import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { UserModel, UserStore } from "./Models/UserModel"

export const RootStoreModel = types
  .model("RootStore")
  .props({
    users:types.optional(types.map(UserModel),{}),
    currentUser:types.maybeNull(UserModel)
  })
  .actions((self)=>({
    setCurrentUser(user:UserStore){
        self.currentUser=user;
    },
    logout(){
        self.currentUser=null;
    },
    addUser(user:UserStore){
        self.users.set(user.id,UserModel.create(user))
    },
    updateScore(score:number){
        const connectedUser=self.users.get(self.currentUser?.id as string)
        connectedUser?.updateScore(score)
    }
  }))
export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}