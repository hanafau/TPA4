import React from "react";
import "../Sub/Style.css";

function Blog() {
  return (
    <div>
      <section className="about" id="about">
        <h1>Blog</h1>
        <div className="main-about">
          <img src="https://niagaspace.sgp1.digitaloceanspaces.com/blog/wp-content/uploads/2021/01/30152026/apa-itu-website.jpg" />
          <div className="about-teks">
            <h3>
              <a href="https://www.niagahoster.co.id/blog/pengertian-website/?amp">Apa Itu Website? Pengertian, Jenis, dan Manfaatnya!</a>
            </h3>
            <p>Website adalah halaman dengan informasi tertentu yang bisa diakses online. Bagaimana penjelasan lengkapnya? Simak artikel berikut!</p>
          </div>
        </div>
        <div className="main-about">
          <img src="https://www.garuda.website/blog/wp-content/uploads/2019/11/web-developer-apa-itu-dan-bagaimana-cara-kerjanya-1024x576.jpg" />
          <div className="about-teks">
            <h3>
              <a href="https://www.garuda.website/blog/web-developer/">Apa itu Web Developer, bagaimana cara kerjanya?</a>
            </h3>
            <p>Industri teknologi berkembang menciptakan peluang karir baru dalam desain web dan pengembangan aplikasi. Tapi, sekarang Web Developer juga bisa ...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
