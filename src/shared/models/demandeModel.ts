import { traitementModel } from "./traitementModel"

export class demandeModel{
dateDebut:Date  
dateDebutPlusDetaile:string
duree: number
justification: string
typeConge: string
dateFin: Date
dateFinPlusDetaile: Date
traitement1:traitementModel
traitement2:traitementModel

}