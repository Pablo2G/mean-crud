export class User {
    //De esta forma TypeStript crea los setter y getter autimaticamente!!! yeahhh!!!
    constructor(
        public _id:String,
        public name: String,
        public surmae: String,
        public email: String,
        public password: String,
        public role: String,
        public image: String
    ){

    }
}
