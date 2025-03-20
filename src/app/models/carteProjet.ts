export interface Projet {
  image: string;
  titre: string;
  logos: string[];
  liens: { url: string; label: string }[];
}

// export class CarteProjet {

//   id: string;

//   constructor(
//     public nameProjet: string,
//     public imgUrl: string,
//     public lienFrontend: string,
//     public lienBackend: string,
//     public listTechno: string[],) {
//       this.id = crypto.randomUUID().substring(0,8);
//     }


// }