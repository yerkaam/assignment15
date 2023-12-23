// Импортируем компонент
import sliders from '../components/sliders.vue';

// Экспортируем объект с метаданными
export default {
  title: 'sliders', // Заголовок для историй
  component: sliders, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { sliders },
  template: '<sliders :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { sliders },
  template: '<sliders :label="\'Another Text\'" />',
});