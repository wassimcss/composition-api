import axios from "axios";
import { Action, Mutation, Module, VuexModule } from "vuex-module-decorators";
import { Actions, Mutations } from "../enums/StoreEnums";




@Module
export default class PostModule
  extends VuexModule
 
{
  posts = [] ;

  get getPosts() {
    return this.posts;
  }

  @Mutation
  [Mutations.SET_POSTS_MUTATION](payload) {
    this.posts = payload;
  }

  @Action
  async [Actions.FETCH_POSTS]() {
    const { data } = await axios.get("http://localhost:3000/posts");
    console.log(data)

    this.context.commit(Mutations.SET_POSTS_MUTATION, data);
  }
}
