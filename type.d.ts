export interface EnterPosts {
  id?: string;
  date: string;
  name?: string;
  title: string;
  descriptions:string;
}

export interface PostApi {
  date: string;
  title: string;
  descriptions:string;
}

export interface PostsList {
  [id: string]: EnterPosts;
}
