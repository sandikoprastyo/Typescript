class Siswa {
  name : string = 'dol';
  age = 26;

  getName() : string {
    return this.name;
  }
}
let m = new Siswa();
console.log(m.age);
