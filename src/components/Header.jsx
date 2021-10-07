import '../styles/header.scss'
import React from "react";
import { Container } from "reactstrap";

export default function Header() {
  return (
    <header className='header'>
      <Container className='d-flex align-items-center'>
          <div className="logo">
            <img
              src="https://static.pneustore.com.br/medias/sys_master/root/hd3/hed/9042777407518/LOGO-PNEUSTORE-NEGATIVO.png"
              alt=""
            />
          </div>
          <div className="search">
            <input type="text" />
          </div>
      </Container>
    </header>
  );
}