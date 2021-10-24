/*
* Define body of Post Entity, named as PostInterface to avoid 
* clashing with Post Decorator
*/
export interface PostInterface {
    id? : string,
    name : string,
    description : string
}