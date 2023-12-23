// Импортируем компонент
import textTypo from '../components/textTypo.vue';

// Экспортируем объект с метаданными
export default {
  title: 'textTypo', // Заголовок для историй
  component: textTypo, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { textTypo },
  template: '<textTypo :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { textTypo },
  template: '<textTypo :label="\'Another Text\'" />',
});