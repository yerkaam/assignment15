// Импортируем компонент
import Labels from '../components/Labels.vue';

// Экспортируем объект с метаданными
export default {
  title: 'Labels', // Заголовок для историй
  component: Labels, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { Labels },
  template: '<Labels :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { Labels },
  template: '<Labels :label="\'Another Text\'" />',
});