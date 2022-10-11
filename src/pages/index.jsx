import Head  from "next/head";
import { AdditionalInfo } from "../components/home/additionalInfo/AdditionalInfo";
import { Footer } from "../components/home/footer/Footer";
import { Header } from "../components/home/header/Header";
import { HowWorkQuery } from "../components/home/howWorkQuery/HowWorkQuery";
import { StepPlatform } from "../components/home/stepPlatform/StepPlatform";
import { WhyUsePlatform } from "../components/home/whyUsePlatform/WhyUsePlatform";



export default function Home() {
  return (
    <>
      <Head>
        <title>StayHealthy</title>
      </Head>

      <Header />
      <AdditionalInfo />
      <WhyUsePlatform />
      <StepPlatform />
      <HowWorkQuery />
      <Footer />
    </>
  )
}
