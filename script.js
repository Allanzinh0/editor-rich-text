const editorEl = document.querySelector('#editor');

const btnBold = document.querySelector('#btn-bold');
const btnItalic = document.querySelector('#btn-italic');
const btnUnderline = document.querySelector('#btn-underline');

const fontSizeComponent = document.querySelector('#size-component');
const fontFamilyComponent = document.querySelector('#font-component');
const textColor = document.querySelector('#text-color');

const btnAlignLeft = document.querySelector('#btn-align-left');
const btnAlignCenter = document.querySelector('#btn-align-center');
const btnAlignRight = document.querySelector('#btn-align-right');
const btnAlignJustify = document.querySelector('#btn-align-justify');

const execute = (command, value = '') => editorEl.contentDocument.execCommand(command, true, value);

editorEl.contentDocument.designMode = "on";
editorEl.contentDocument.querySelector('body').style.wordBreak = 'break-word';

btnBold.addEventListener('click', evt => execute('bold'));
btnItalic.addEventListener('click', evt => execute('italic'));
btnUnderline.addEventListener('click', evt => execute('underline'))

fontSizeComponent.addEventListener('change', evt => execute('fontSize', evt.target.value));
fontFamilyComponent.addEventListener('change', evt => execute('fontName', evt.target.value));
textColor.addEventListener('change', evt => execute('foreColor', evt.target.value));

btnAlignLeft.addEventListener('click', evt => execute('justifyLeft'));
btnAlignCenter.addEventListener('click', evt => execute('justifyCenter'));
btnAlignRight.addEventListener('click', evt => execute('justifyRight'));
btnAlignJustify.addEventListener('click', evt => execute('justifyFull'));