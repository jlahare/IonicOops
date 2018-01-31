export class Employee
{
    name: string;
    gender: string;

    constructor()
    {

    }

    setName(name)
    {
        this.name = name;
    }
    setGender(gender)
    {
        this.gender = gender;
    }

    toString()
    {
        return this.name + " , " + this.gender;
    }

    //MULTIPLE CONSTRUCTORS NOT ALLOWED
    
    // constructor(name: string , gender: string) 
    // {
        
    // }

}