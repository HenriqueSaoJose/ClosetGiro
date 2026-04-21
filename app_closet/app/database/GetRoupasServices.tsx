import { InicializeDB } from "./db"

export async function GetClothes(){
  const response = InicializeDB().then((db)=>{
    return db.execAsync(`
      SELECT * FROM Roupa;
    `)
  }).then((result)=>{
    console.log(result)
    return{
      sucess:true,
      data:result
    }
  }).catch((error)=>{
    console.error("Error fetching clothes:", error);
    return{
      sucess:false,
      error:error
    }
  })
}