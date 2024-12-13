import ErrorBoundary from '@/components/ErrorBoundary'
import Portfolio from '@/components/Portfolio'

export default function Home() {
  return (
    <ErrorBoundary>
      <Portfolio />
    </ErrorBoundary>
  )
}