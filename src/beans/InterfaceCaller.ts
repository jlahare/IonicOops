import { Holder } from "../interfaces/Holder";


export class InterfaceCaller
{
    

    constructor()
    {
        let holder: Holder;
        holder = {
                name: "Jayesh",
                greenCard: true,
                age: 28
        };
       

        console.log("Interface Details : " + holder.name + " , " + holder.age + " , " + holder.greenCard);
    }
   
}