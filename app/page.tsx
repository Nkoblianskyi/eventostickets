import { HomeHero } from '@/components/home/home-hero'
import { HomeStats } from '@/components/home/home-stats'
import { HomeTrust } from '@/components/home/home-trust'
import { HomeShowcase } from '@/components/home/home-showcase'
import { HomeSteps } from '@/components/home/home-steps'
import { HomePartners } from '@/components/home/home-partners'
import { HomeCta } from '@/components/home/home-cta'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeTrust />
      <HomeShowcase />
      <HomeSteps />
      <HomePartners />
      <HomeCta />
    </>
  )
}
