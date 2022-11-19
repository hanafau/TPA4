import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
              <Link to={"/About"}>Baca lebih lanjut...</Link>
            </p>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <h2>PORTFOLIO</h2>
        <div className="porto-container">
          <div className="box">
            <div className="box-img">
              <img src="../img/p1.png" alt="website sabiDoc" />
            </div>
            <h3>
              <Link to={"/Porto1"}>Website Konsultasi Kesehatan</Link>
            </h3>
          </div>
          <div className="box">
            <div className="box-img">
              <img src="../img/p2.png" alt="website e-commerce" />
            </div>
            <h3>
              <Link to={"/Porto2"}>Website E-Commerce</Link>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
