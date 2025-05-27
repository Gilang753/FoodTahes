const colors = {
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
  blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
  lightBlue: (opacity = 1) => `rgba(173, 200, 255, ${opacity})`,
  darkBlue: (opacity = 1) => `rgba(35, 60, 190, ${opacity})`,
  green: (opacity = 1) => `rgba(46, 204, 113, ${opacity})`,       
  orange: (opacity = 1) => `rgba(243, 156, 18, ${opacity})`,      
  red: (opacity = 1) => `rgba(231, 76, 60, ${opacity})`,          
  darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
  darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
  darkModeGrey: (opacity = 1) => `rgba(64, 64, 64, ${opacity})`,
  background: (opacity = 1) => `rgba(245, 247, 250, ${opacity})`,
  border: (opacity = 1) => `rgba(220, 220, 220, ${opacity})`,
  textPrimary: (opacity = 1) => `rgba(33, 33, 33, ${opacity})`,
  textSecondary: (opacity = 1) => `rgba(117, 117, 117, ${opacity})`,
};

export default colors;
