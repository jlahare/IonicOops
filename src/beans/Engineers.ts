import { Employee } from "./Employee";

export class Engineers extends Employee
{
    language: string;

    constructor()
    {
        super();
    }

    setLanguage(lang)
    {
        this.language = lang;
    }
    getLanguage()
    {
       return this.language;
    }

    toString()
    {
        return super.toString() + " , " +   this.getLanguage();
    }


}