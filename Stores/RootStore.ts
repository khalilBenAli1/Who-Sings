import { Instance, SnapshotOut, types } from "mobx-state-tree";
import { UserModel } from "./Models/UserModel";

export const RootStoreModel = types
  .model("RootStore")
  .props({
    users: types.optional(types.map(UserModel), {}),
    currentUser: types.maybeNull(types.reference(UserModel)),
  })
  .actions((self) => ({
    setCurrentUser(email:string) {
      const connectedUser=self.users.get(email)
      if (connectedUser) {
        self.currentUser = connectedUser;
      }
    },
    logout() {
      self.currentUser = null;
    },
    addUser(user: { email: string; password: string; name: string; score: number }) {
      const newUser = UserModel.create(user);
      self.users.set(newUser.email, newUser);
    },
    updateScore(score: number) {
      const connectedUser = self.users.get(self.currentUser?.email as string);
      connectedUser?.updateScore(score);
    },
  }));
export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
