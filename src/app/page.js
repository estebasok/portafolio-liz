// page.js
"use client";

import React, { useState } from 'react';
import Navbar from './Navbar';
import './Page.css';

const Page = () => {
  const [searchText, setSearchText] = useState('');

  const projects = [
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465419500_122184276158221306_3449398751524618557_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFGXNv_iB4NamC0uWaNxERl1jX1DQ1UGiXWNfUNDVQaJQgT0pcxfcXgxCJSme2d0vIVxh_K2Q-iDmc6O9heHXbN&_nc_ohc=DT6-CLes24cQ7kNvgG0ekwZ&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AMHynfgt-rsOoIF2RHbxJVQ&oh=00_AYDUsqDDYHwtkSoxKoPlCn7DrxB6sXeTgG8TB3Cm0Uj85Q&oe=672D8A9D",
      title: "Crear página para una empresa en Wix",
      link: "https://martinezalvarezjua.wixsite.com/michifu",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465671093_122184297656221306_8602659860422729079_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE5ekKfuliLap_AKFzL454lD5hqwDfqeG0PmGrAN-p4bSp5j6YGZJBJzBSRf13jNbLTN1NhkwfHNG_OeL6LUjZ2&_nc_ohc=23TUZjkRNa8Q7kNvgHZAPtd&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=Ah0_FZFpvKkqRvLH2eYPfRE&oh=00_AYAFGVNOt00MC9-Jt2UPBgyywMK6hktiFaiLyzyl7zTLJA&oe=672DD1AE",
      title: "Actividad en Blogger",
      link: "https://poliplusi.blogspot.com",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465692567_122184298664221306_1595774525646385745_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFZliYx2x8nQ0nl6KmbKyuhIBDHEFjj_E0gEMcQWOP8TbUiz3prh2qW6QyarZCPpCQPBHEGZSGV9OpkBbUicYri&_nc_ohc=I3Qg9iFfz64Q7kNvgEUqNgf&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AKyn_7nZ3HJ31UPGK0aapT6&oh=00_AYDkBp28cNMHJhflZ2jkv6A6RTbxvSjNj__t4nXEsTioCw&oe=672DD760",
      title: "blogger premium",
      link: "https://wordeletronicos.blogspot.com",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465576830_122184323522221306_2652823306175137788_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGw1rPU916QoUkICRJYUd6nAkglEDC8wuoCSCUQMLzC6l45INYbsojy8iuPTIU8wusAryFknZnqt-ESbPkV9pMn&_nc_ohc=P3_Ik58rFiwQ7kNvgH4sG7W&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AvqDgn_Q1Y9MjSernlcdnyp&oh=00_AYBWiQEHqw77yNAG3VJzOLVEtya9cqJTJfcqhZR2zlwxWg&oe=672DF9EF",
      title: "DFD",
      link: "https://www.mediafire.com/file/yypv77t8opsgke5/proyectos+de+dfd.rar/file",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465608681_122184328064221306_8057972407151483473_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFXrnBJHDD6SNjMruC_dMIw43sHRktlwKLjewdGS2XAohInuhLuSfKdj5ynrVwbbr_O4Sd6RGyKP7C2lz_rLAjc&_nc_ohc=Y90CRjJm4TwQ7kNvgFktEnb&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AT2toPnr27K8JsadQOyqglH&oh=00_AYC60mCro7w27vUHvMR_XM0mcNcNKUW3_PZED-Egk25HaQ&oe=672E10DF",
      title: "instroduccion a scratch y juego de DFD",
      link: "https://www.mediafire.com/file/rqey508896kjmps/Juego_DFD.pdf/file",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465784114_122184332504221306_4801712874241648988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGVBBgFhuXV4-4a0Yo6V2DFNrXO7XKbAjk2tc7tcpsCOTv2B7NYwzjUsnBOcOcT_TQbT8f-nZa6ZgEj6MhXbXJm&_nc_ohc=tFLl7Kuj2CIQ7kNvgHKfZCC&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AjkS8MRyJKJH-vX3LaE6erC&oh=00_AYD6jGQS9fGAc9q0sIMgkgfgPP_ZgaVH1MfkaJ2_MdkDeQ&oe=672E0192",
      title: "hoja de vida html y css",
      link: "https://github.com/estebasok/oeoe",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465650873_122184332960221306_1916865526471654850_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEPspbz3hQ-jcZsHOI5BYUEsbHdcwDwqsKxsd1zAPCqwuDXUmzhVMo0uWSNBAcWV7PfnpGLwPsIx3Q4RFHxcVqU&_nc_ohc=2BY9KWUYnzMQ7kNvgH6aV4h&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AIjDa-oUuVe3HHmUMdmEfCT&oh=00_AYBodRvHiSb76v4d-llMnYdYWtV4hlGwaNAJyLWxNK3xsg&oe=672E1757",
      title: "5 MINI proyectos en hml y css",
      link: "https://www.mediafire.com/file/q9eo4qecs349ikt/Juan_Esteban_Martinez_Alvarez.pdf/file",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465993981_122185412606221306_4068532136713750_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFIObNNjGaH90mxowNUJOIANL6ag0VtDMU0vpqDRW0MxesgOVg2WWT4nFIySYndvhj1iahOQTDaC_se3rMDGUt0&_nc_ohc=AmHhQHcshpcQ7kNvgHpB-Iq&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AF0SnYSkqYAzyOFgYlnOHsf&oh=00_AYDELp5NQPKl4Ckn0G8g-F1OsB2Eh-eT1UtDYBiAzcjseQ&oe=6735488C",
      title: "El generador de pdf, html, css, js",
      link: "https://merry-twilight-305ca1.netlify.app/",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465614201_122184335450221306_8193370165927852422_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEXz-61oG_C9VhkcoCNWPWRNdfVt0F5LOI119W3QXks4rNAde3xfRkUfdZUjXwgw0M7z5DfFLiayYEqGCPigZzK&_nc_ohc=tVVS6jY1bJwQ7kNvgEtv2fz&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AfZGjRaJeBHB8vARq6Pad3P&oh=00_AYCq9YYK_BDT1t2fq_77_mb31n1tqFVrUCksNEbNylrs5g&oe=672E2BF6",
      title: "CALCULADORA EN HTML, CSS Y JAVASCRIPT",
      link: "https://ornate-profiterole-c80dfc.netlify.app",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465576050_122184335984221306_4733628911403963661_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHD0ymjHKC5dexRLwSfdNujiv6gy0vm12aK_qDLS-bXZrP6NWxd4dVpgRdehVFqkOeYRqjAuFnoZhnuofiWsZE7&_nc_ohc=DUaOOGrK6o4Q7kNvgEy0OaR&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=ADFolxVOn1eWwgwcYpvA0FT&oh=00_AYDdvMiaiYza7pklWGMJ5N1h6AjNJ5RoLXpqVamN35Wg0g&oe=67355910",
      title: "clon netflix html, css y javascript",
      link: "https://lucky-speculoos-f118e2.netlify.app",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/466076158_122185518590221306_2859215575223816819_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGjYV5zwQQfRB-Kc2Q7AfpAw5LPgmGSW2bDks-CYZJbZowOYxrtFOPSTmn0axxgJQ404KX4-dtsazSv9JssYYrA&_nc_ohc=I9BCBZzCsKUQ7kNvgFVb8Ll&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=ASjDa8ZsrEqUiFYDN0uPSzp&oh=00_AYCvC-ZE7v1XDVeda5ijZWTFX14ATFxUt7_RezQA9jalWQ&oe=67355970",
      title: "Pagina de Citas",
      link: "https://www.mediafire.com/file/j3wkyly05p1o3tf/citas.rar/file",
    },
    {
      img: "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/466163404_122185519202221306_8568378178590894378_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHcinCe3cgD3aQK-zWwbTKyjnEaMsFwczmOcRoywXBzOas44QEsQ4FQSSCP1YW83A0Jd3euuKSWA8DeW2jI_5B7&_nc_ohc=FSpt1CXbuR8Q7kNvgHQCju-&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=ANmxCl3z5DVjoGzIpMBxHts&oh=00_AYChc_5ZPo_6ui_mykuM65N_yhc0Z44GQ6jwHHwbPTqJJA&oe=673542C1",
      title: "Presupuesto",
      link: "https://www.mediafire.com/file/5ageu2m46iwlm89/presupuesto.rar/file",
    },
    
    // Agrega más objetos de proyecto aquí
  ];

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="Page">
      <Navbar onSearch={setSearchText} />

      <section className="About">
        <h2>Sobre Mí</h2>
        <img src="https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/465913998_122184766364221306_6018870061106004521_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFE1D0FrsO8jJgtrdFtZEqHVDzMVDAWQmdUPMxUMBZCZ7v9A8WjbgkrrCQlWSeW-Hg93O-yHC-8L9btIzQOGsBd&_nc_ohc=eVYri1M7ADEQ7kNvgGLpVEO&_nc_zt=23&_nc_ht=scontent.fbga2-1.fna&_nc_gid=AyT258WVukOabH_SFcBKoVr&oh=00_AYDImix3JIVLJApP8UCUNMxOXP7A0a5BRcm-ujAIXB3IVQ&oe=6730C87C" alt="Sobre mí" />
        <p>Soy un desarrollador web con experiencia en plataformas como Wix, Blogger, y WordPress, y desarrollo personalizado con JavaScript, HTML y CSS.</p>
      </section>

      <section className="Projects">
        <h2>Proyectos</h2>
        <div className="project-list">
          {filteredProjects.map((project, index) => (
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
