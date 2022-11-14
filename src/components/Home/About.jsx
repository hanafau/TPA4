import React from "react";
import "../Sub/Style.css";
// import Navbar from "./components/Navbar";

function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="main-about">
          <img width="250px" src="../img/foto2.png" />
          <div className="about-teks">
            <h2>About Me</h2>
            <p>
              Halo, saya Hana Fauziah, saya seorang mahasiswa dari Universitas Amikom Yogyakarta dengan jurusan Sistem Informasi. disini saya mengikuti salah satu program pemerintah yaitu kampus merdeka bagian studi independen. alasan saya
              memilih mengikuti program ini untuk menambah pengalaman serta ilmu baru tentang website. pada studi independen ini saya memilih untuk bagian frontend developer karena lebih tertarik pada bagian ini. saat kuliah saya juga sudah
              diajarkan untuk membuat web dasar menggunakan HTML, CSS, Bootstrap, PHP, dan Codeigniter 3. untuk javascript masih jarang digunakan saat perkuliahan saya, lebih kebanyakan PHP. website yang dibuat saat perkuliahan lebih ke web
              e commerce karena kebetulan saat konsentrasi saya memilih e commerce.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
