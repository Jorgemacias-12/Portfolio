import { Switch } from './Switch'
import { $theme } from '@/stores/theme'

export const ThemeSwitcher = () => {

  const onThemeChange = (state: boolean) => {
    $theme.set(
      $theme.get() === 'light' ? 'dark' : 'light'
    )
  }

  return (
    <Switch 
      defaultState={$theme.get() === 'light'} 
      icons={["fa-moon", "fa-sun text-yellow-300"]}
      title="Theme switcher light/dark"
      onClick={onThemeChange}
    />
  )
}
