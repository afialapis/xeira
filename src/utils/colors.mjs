const _code = (mod, num_code) => `\u001b[${mod}${num_code}m`;
const _reset= `\u001b[0;39m`;

const black= (s) => _code('0;', '30') + s + _reset 
const black_bold= (s) => _code('1;', '30') + s + _reset 
const black_light= (s) => _code('2;', '30') + s + _reset 
const black_italic= (s) => _code('3;', '30') + s + _reset 
const black_under= (s) => _code('4;', '30') + s + _reset 
const black_invert= (s) => _code('7;', '30') + s + _reset 
const black_strike= (s) => _code('9;', '30') + s + _reset 
const red= (s) => _code('0;', '31') + s + _reset 
const red_bold= (s) => _code('1;', '31') + s + _reset 
const red_light= (s) => _code('2;', '31') + s + _reset 
const red_italic= (s) => _code('3;', '31') + s + _reset 
const red_under= (s) => _code('4;', '31') + s + _reset 
const red_invert= (s) => _code('7;', '31') + s + _reset 
const red_strike= (s) => _code('9;', '31') + s + _reset 
const green= (s) => _code('0;', '32') + s + _reset 
const green_bold= (s) => _code('1;', '32') + s + _reset 
const green_light= (s) => _code('2;', '32') + s + _reset 
const green_italic= (s) => _code('3;', '32') + s + _reset 
const green_under= (s) => _code('4;', '32') + s + _reset 
const green_invert= (s) => _code('7;', '32') + s + _reset 
const green_strike= (s) => _code('9;', '32') + s + _reset 
const yellow= (s) => _code('0;', '33') + s + _reset 
const yellow_bold= (s) => _code('1;', '33') + s + _reset 
const yellow_light= (s) => _code('2;', '33') + s + _reset 
const yellow_italic= (s) => _code('3;', '33') + s + _reset 
const yellow_under= (s) => _code('4;', '33') + s + _reset 
const yellow_invert= (s) => _code('7;', '33') + s + _reset 
const yellow_strike= (s) => _code('9;', '33') + s + _reset 
const blue= (s) => _code('0;', '34') + s + _reset 
const blue_bold= (s) => _code('1;', '34') + s + _reset 
const blue_light= (s) => _code('2;', '34') + s + _reset 
const blue_italic= (s) => _code('3;', '34') + s + _reset 
const blue_under= (s) => _code('4;', '34') + s + _reset 
const blue_invert= (s) => _code('7;', '34') + s + _reset 
const blue_strike= (s) => _code('9;', '34') + s + _reset 
const magenta= (s) => _code('0;', '35') + s + _reset 
const magenta_bold= (s) => _code('1;', '35') + s + _reset 
const magenta_light= (s) => _code('2;', '35') + s + _reset 
const magenta_italic= (s) => _code('3;', '35') + s + _reset 
const magenta_under= (s) => _code('4;', '35') + s + _reset 
const magenta_invert= (s) => _code('7;', '35') + s + _reset 
const magenta_strike= (s) => _code('9;', '35') + s + _reset 
const cyan= (s) => _code('0;', '36') + s + _reset 
const cyan_bold= (s) => _code('1;', '36') + s + _reset 
const cyan_light= (s) => _code('2;', '36') + s + _reset 
const cyan_italic= (s) => _code('3;', '36') + s + _reset 
const cyan_under= (s) => _code('4;', '36') + s + _reset 
const cyan_invert= (s) => _code('7;', '36') + s + _reset 
const cyan_strike= (s) => _code('9;', '36') + s + _reset 
const white= (s) => _code('0;', '37') + s + _reset 
const white_bold= (s) => _code('1;', '37') + s + _reset 
const white_light= (s) => _code('2;', '37') + s + _reset 
const white_italic= (s) => _code('3;', '37') + s + _reset 
const white_under= (s) => _code('4;', '37') + s + _reset 
const white_invert= (s) => _code('7;', '37') + s + _reset 
const white_strike= (s) => _code('9;', '37') + s + _reset 
const gray= (s) => _code('0;', '38') + s + _reset 
const gray_bold= (s) => _code('1;', '38') + s + _reset 
const gray_light= (s) => _code('2;', '38') + s + _reset 
const gray_italic= (s) => _code('3;', '38') + s + _reset 
const gray_under= (s) => _code('4;', '38') + s + _reset 
const gray_invert= (s) => _code('7;', '38') + s + _reset 
const gray_strike= (s) => _code('9;', '38') + s + _reset 

export {
black, 
black_bold, 
black_light, 
black_italic, 
black_under, 
black_invert, 
black_strike, 
red, 
red_bold, 
red_light, 
red_italic, 
red_under, 
red_invert, 
red_strike, 
green, 
green_bold, 
green_light, 
green_italic, 
green_under, 
green_invert, 
green_strike, 
yellow, 
yellow_bold, 
yellow_light, 
yellow_italic, 
yellow_under, 
yellow_invert, 
yellow_strike, 
blue, 
blue_bold, 
blue_light, 
blue_italic, 
blue_under, 
blue_invert, 
blue_strike, 
magenta, 
magenta_bold, 
magenta_light, 
magenta_italic, 
magenta_under, 
magenta_invert, 
magenta_strike, 
cyan, 
cyan_bold, 
cyan_light, 
cyan_italic, 
cyan_under, 
cyan_invert, 
cyan_strike, 
white, 
white_bold, 
white_light, 
white_italic, 
white_under, 
white_invert, 
white_strike, 
gray, 
gray_bold, 
gray_light, 
gray_italic, 
gray_under, 
gray_invert, 
gray_strike, 
}
