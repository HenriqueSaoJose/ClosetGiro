import {InicializeDB} from './db';

export async function InsertClothes(ID:number, nome: string, tamanho: string, quantidade: number) {
  try{
    const db = await InicializeDB();
    await db.execAsync(`
      INSERT INTO Roupa (ID, Nome, tamanho, Quantidade)
      VALUES (${ID}, '${nome}', '${tamanho}', ${quantidade});
    `);
    return{
      sucess:true
    }
  }catch(error){
    console.error("Error inserting clothes:", error);
    return{
    sucess:false,
    error:error
  }
  }
 
}