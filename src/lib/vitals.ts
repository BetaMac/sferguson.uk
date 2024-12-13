import { onCLS, onFID, onLCP, onFCP, onTTFB } from 'web-vitals'

export function reportWebVitals() {
  onCLS((metric) => {
    console.log('CLS:', metric.value)
  })
  onFID((metric) => {
    console.log('FID:', metric.value)
  })
  onLCP((metric) => {
    console.log('LCP:', metric.value)
  })
  onFCP((metric) => {
    console.log('FCP:', metric.value)
  })
  onTTFB((metric) => {
    console.log('TTFB:', metric.value)
  })
} 