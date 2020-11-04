export const colorScheme = ( language : string ) => {

  let color;
  
  switch ( language ) {
    case 'JavaScript':
      color = '#f1e05a';
      break;
    case 'TypeScript':
      color = '#2b7489';
      break;
    default: 
      return 'transparent';
  }
  return color;
}