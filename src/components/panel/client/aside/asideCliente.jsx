import * as S from './styles'
import Link from 'next/link'
import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";

export function AsideCliente({urlRoutes}) {
  const listLinkOptions = [
    {
      id: 0,
      url: 'home',
      link: 'Home',
      classActive: '',
    },
    {
      id: 1,
      url: 'consulta',
      link: 'Consulta',
      classActive: ''
    },
    {
      id: 2,
      url: 'historico',
      link: 'Histórico',
      classActive: ''
    },
    {
      id: 3,
      url: 'examesdieta',
      link: 'Exames/Dieta',
      classActive: ''
    },
    {
      id: 4,
      url: 'cardapionutri',
      link: 'Cardapio Nutri',
      classActive: ''
    },
    {
      id: 5,
      url: 'metas',
      link: 'Metas',
      classActive: ''
    },
    {
      id: 6,
      url: 'historicobalanca',
      link: 'Histórico Balança',
      classActive: ''
    },
    {
      id: 7,
      url: 'settings',
      link: 'Configurações',
      classActive: ''
    },
  ]

  

  function classNameActive(event) {
    const li = document.querySelectorAll('li')
    li.forEach((e) => {
      e.classList.remove('active')
    })
    event.currentTarget.className = `${event.currentTarget.className} active`
  }

  function activeClassNameReload(url) {
    const listUrl = listLinkOptions.filter(urlList => urlList.url === url)
    
    if(listUrl.length) {
      listUrl[0].classActive = 'active'
    }

  }

  activeClassNameReload(urlRoutes)

  return (
    <S.Painel>
      <S.Logo src="/images/logoLogin.png" alt="" />
      <S.PhotoContainer>
        <S.Photo src="/images/foto.png" alt="" />
        <span>João da silva santos</span>
      </S.PhotoContainer>
      <nav>
        <S.Lista>
          {listLinkOptions.map(options => (
            <Link href={options.url} key={options.id}>
              <S.LiLinks className={options.classActive} onClick={classNameActive}>
                {options.link}
              </S.LiLinks>
            </Link>
          ))}
        </S.Lista>
      </nav>
      
      <S.ButtonLoggof><RiLogoutBoxLine />SAIR</S.ButtonLoggof>
      
    </S.Painel>
  )
}