export function toggleDarkMode(theme: boolean) {
    
  return {
    type: 'TOGGLE_DARKMODE',
    payload: theme,
  }
}