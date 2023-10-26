// //Soal Kondisi Air

function kondisiAir(suhu) {
  return suhu >= -100 && suhu <= 0 ? 'Beku' :
         suhu >= 1 && suhu <= 100 ? 'Cair' :
         suhu >= 101 && suhu <= 500 ? 'Uap' : 'Tidak terdefinisi';
}

let suhu = -10;
console.log('Kondisi air:', kondisiAir(suhu));




//Soal SPBU

function spbu(plat, tipe, cc) {
  return plat == 'kuning' || tipe == 'motor' ? 'BBM Subsidi' :
         tipe == 'mobil' && cc < 1500 ? 'Pertamax' : 'Pertamax Turbo';
}

let plat = 'hitam';
let tipe = 'mobil';
let cc = 1500;
console.log('Jenis BBM SPBU:', spbu(plat, tipe, cc));