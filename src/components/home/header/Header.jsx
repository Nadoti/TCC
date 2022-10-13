import * as S from "./styles";
import Link from 'next/link'
import React, { useRef } from "react";


export function Header() {

  const ref = useRef(null);

  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  console.log(ref.current)

  //Jakob Winterholler

  return (
    <S.Container>
      <S.Nav>
        <Link href="/">
          <S.Logo src="/images/logo.svg" alt="Logo"/>
        </Link>
        <S.Navigation>
          <S.LinkPages>
            <Link href="/sobre">Sobre</Link>
          </S.LinkPages>
          <S.LinkPages>
            <Link href="/especialistas">Especialistas</Link>
          </S.LinkPages>
          <a href="login" className="login">Entrar</a>
        </S.Navigation>
      </S.Nav>

      <S.Content>
        <S.Info>
          <S.TitleMain>Mantenha-se sempre <br /> <span>saudável</span></S.TitleMain>
          <S.SubInfo>Plataforma de atendimento em tempo real <br /> com profissionais da área de nutrição</S.SubInfo>
          <S.Register>
            <Link href="/register">Cadastre-se</Link>
          </S.Register>
          
        </S.Info>
        <div>
          <lottie-player
            id="firstLottie"
            ref={ref}
            autoplay
            loop
            mode="normal"
            src='./images/tcc.json'
            style={{ maxWidth: "450px", maxHeight: "450px" }}
          >
          </lottie-player>
          {/* <img src="./images/imgPrincipal.png" alt="" className="sa"/> */}
        </div>
      </S.Content>
    </S.Container>
  )
}