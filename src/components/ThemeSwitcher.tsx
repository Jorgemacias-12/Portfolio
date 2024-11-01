import { Switch } from './Switch'
import { $theme } from '@/stores'

export const ThemeSwitcher = () => {

  const onThemeChange = (state: boolean) => {
    $theme.set(
      $theme.get() === 'light' ? 'dark' : 'light'
    )
  }

  return (
    <Switch 
      defaultState={$theme.get() === 'light'} 
      icons={["fa-sun", "fa-moon"]}
      title="Theme switcher light/dark"
      onClick={onThemeChange}
    />
  )
}