// FW Alphabet(UP+lower): Ａ-ｚ
// FW hiragana: ぁ-ん
// FW katakana: ァ-ヾビ
// FW number: ０-９
// FW symbol: ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦
// FW Kanji: 一-龥 々
// FW Space:

// HW Alphabet: A-Z a-z
// HW katakana: ｧ-ﾝﾞﾟｦ
// HW number: 0-9
// HW symbol: \-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥

// fw = FW Alphabet(UP+lower) + FW hiragana + FW katakana + FW number + FW symbol +  FW Kanji

export const password =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])[a-zA-Z0-9#?!@$%^&*-]*$/;

export const time = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

export const fw =
  /^[Ａ-ｚぁ-んァ-ヾビ０-９ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦一-龥 々 ]+$/;
export const fwKatakana = /^([ァ-ヾビ])+$/;
export const hwKataKana = /^[ｧ-ﾝﾞﾟｦ]+$/;
export const hwDigit = /^[0-9]+$/;

export const email =
  // eslint-disable-next-line
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-zA-Z]{2,}))$/;
export const japaneseEmailExclude =
  /[ぁ-んァ-ヾビｧ-ﾝﾞﾟｦＡ-ｚ０-９一-龥 々ｰ−，．・：；！？＂＇｀＾～￣＿＆。＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦]/;
export const macAddressPattern =
  /^([A-Za-z0-9\-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥])+$/;
export const hwAlphabet_hwDigit_hwSymbol =
  /^[a-zA-Z0-9-–/,.:;!@#$%&*^`()_=+{}|"'?><+~￥]+$/;

export const fw_hwAlphabet_hwDigit =
  /^[ Ａ-ｚ０-９ぁ-んァ-ヾビ 一-龥 々　ｰ−，．・：；！？＂＇｀＾～￣＿＆。＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦A-Za-z0-9]+$/;
export const fwKatakana_fwDigit = /^([ァ-ヾビ０-９])+$/;
export const fw_hwAlphabet =
  /^[ Ａ-ｚA-Za-z０-９ぁ-んァ-ヾビ 一-龥々　ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦]+$/;
  export const fw_hwKataKana =
  /^[Ａ-ｚぁ-んァ-ヾビ０-９ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦一-龥 々 ｧ-ﾝﾞﾟｦ]+$/;
export const fw_hwKana_hwAlphabet_hwDigit_hwSymbol =
  /^[ Ａ-ｚA-Za-z０-９0-9ぁ-んァ-ヾビｧ-ﾝﾞﾟｦ一-龥々ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦ \-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥]+$/;
export const hwDigit_hwSymbol = /^[0-9\-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥]+$/;
export const hwAlphabet_hwSymbol = /^[A-Z a-z \-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥]+$/;
export const fw_hwAlpha_hwDigit_hwSymbol = /^[一-龥 々ぁ-んァ-ヾビ Ａ-ｚ０-９0-9ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦ A-Z a-z0-9\-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥]+$/
export const fw_hwDigit_hwSymbol = /^[一-龥 々ぁ-んァ-ヾビ Ａ-ｚ０-９0-9ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦ \-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥0-9]+$/;
export const fw_hwKana_hwAlphabet_hwSymbol =
  /^[ Ａ-ｚA-Za-zぁ-んァ-ヾビｧ-ﾝﾞﾟｦ一-龥々ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦ \-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥]+$/;
  export const fw_hwKana_hwDigit_hwSymbol =
  /^[Ａ-ｚぁ-んァ-ヾビ０-９ｰ−，．・：；！？＂＇｀＾～￣＿＆＠＃％＋ー＊＝＜＞（）［］｛｝｟｠「」『』｜￤／＼￢＄￡￠￦一-龥 々 ｧ-ﾝﾞﾟｦ 0-9 \-–/,.:;!@#$%&*^`()_=+{}|"'?><[~￥]+$/;
  
