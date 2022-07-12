import { Groupe } from "./GroupeModel";
import { Permissions } from "./Permissions";

export class role{
    id:number;
    nom:string;
    niveau:number;
    groupe:Groupe;
    permissions:Permissions[]
    rolesup : role
}