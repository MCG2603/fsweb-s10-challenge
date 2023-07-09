import { NOT_EKLE, NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

let baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri
  }
}
baslangicDegerleri.notlar=baslangicNotlariniGetir("s10challange")
const reducer=(state=baslangicDegerleri,action)=>{
console.log(baslangicNotlariniGetir("s10challange"));

  switch(action.type){

    case NOT_EKLE:
      localStorage.setItem("s10challange", JSON.stringify([...state.notlar,action.payload]));


    return{
      ...state,
      notlar:[...state.notlar,action.payload]
    }
    case NOT_SIL:
     let arr=state.notlar.filter(item=>item.id!=action.payload)
    return{
      ...state,
      notlar:arr
    }

    default:
      return state;
  }
}
export default reducer;