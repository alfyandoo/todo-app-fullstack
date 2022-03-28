import { initializeIcons } from '@fluentui/react'
import { registerSW } from 'virtual:pwa-register'
import { start } from 'web-init'
import baseUrl from './baseurl'
import './index.css'

initializeIcons()
start({
  registerSW,
  baseUrl,
})
