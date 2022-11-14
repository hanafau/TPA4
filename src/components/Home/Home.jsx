import React from "react";
import "../Home/Home.css";

function Home() {
  return (
    <div>
      <section className="about" id="about">
        <div className="main-about">
          <img src="../img/foto2.png" />
          <div className="about-teks">
            <h2>About Me</h2>
            <p>
              saya Hana Fauziah, saya seorang mahasiswa dari Universitas Amikom Yogyakarta dengan jurusan Sistem Informasi. disini saya mengikuti salah satu program pemerintah yaitu kampus merdeka
              <a href="/About"> Baca lebih lanjut...</a>
            </p>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <h2>PORTFOLIO</h2>
        <div className="porto-container">
          <div className="box">
            <div className="box-img">
              <img src="../img/p1.png" alt="" />
            </div>
            <h3>
              <a href="/Porto1">Website Konsultasi Kesehatan</a>
            </h3>
          </div>
          <div className="box">
            <div className="box-img">
              <img src="../img/p2.png" alt="" />
            </div>
            <h3>
              <a href="/Porto2">Website E-Commerce</a>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
