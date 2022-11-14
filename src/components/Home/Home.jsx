import React from "react";
import "../Home/Home.css";
import { foto2 } from "img";

function Home() {
  return (
    <div>
      {/* <div className="navbar" id="navbar">
        <div className="sub-navbar">
          <h2>Ha</h2>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#portfolio">
              <li>Portfolio</li>
            </a>
            <a href="/blog">
              <li>Blog</li>
            </a>
          </ul>
        </div>
        <div className="teks">
          <h1>
            Hello
            <br />
            I'm Hana Fauziah
          </h1>
        </div>
      </div> */}

      <section className="about" id="about">
        <div className="main-about">
          <img src={foto2} alt="foto" />
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
