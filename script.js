 function buatKelompok() {
    let names = document.getElementById("names").value//menhambil nama yang di input
      
    .trim()//hapus spasi
    .split("\n")//array dibagi per baris/enter
    .filter(n => n);//memghapus baris kosong
      
    let jumlahKelompok = parseInt(document.getElementById("groups").value);
    if (jumlahKelompok > 50) jumlahKelompok = 50;
    // 🔹 Validasi
  if (!names.length) {
    alert("⚠️ Nama peserta belum dimasukkan!");
    return;
  }

  if (!jumlahKelompok) {
    alert("⚠️ Jumlah kelompok belum diisi!");
    return;
  }

  if (jumlahKelompok > names.length) {
    alert("⚠️ Jumlah kelompok lebih banyak dari jumlah peserta!");
    return;
  }

    //mengambil jumlah kelompok yang di isi
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";//menghapus hasil sebelumnya

    // Acak urutan nama
    names = names.sort(() => Math.random() - 0.5);

    // membuat array berdasarkan jumlah kelompok
    let groups = Array.from({ length: jumlahKelompok }, () => []);
    //memasukan nama ke dalam kelompok
    names.forEach((nama, index) => {
      groups[index % jumlahKelompok].push(nama);
    });

    // Tampilkan hasil//
    groups.forEach((group, index) => {
     let div = document.createElement("div");
      div.classList.add("group");
      div.innerHTML = `<h3>Kelompok ${index + 1}</h3><ul>${group.map((n,i) => `<li>(${i + 1}) ${n}</li>`).join("")}</ul>`;
      resultDiv.appendChild(div);
      });
  }