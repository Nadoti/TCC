import Head from "next/head";
import { AsideCliente } from "../../components/panel/client/aside/asideCliente";
import {PanelOptions} from "../../components/panel/client/panelOptionsRoutes/PanelOptions";
import { useRouter } from 'next/router'
import * as S from "../../styles/painel/styles";


export default function PainelCliente() {

  const path = useRouter()

  const urlRoutes = path.query.painelCliente

  
  return (
    <S.Container>
      <Head>
        <title>Painel | {urlRoutes}</title>
      </Head>
      
      <AsideCliente urlRoutes={urlRoutes}/>
      <PanelOptions urlRoutes={urlRoutes}/>
      
      
    </S.Container>
    
  )
}