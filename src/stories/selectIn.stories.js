// Импортируем компонент
import selectIn from '../components/selectIn.vue';

// Экспортируем объект с метаданными
export default {
  title: 'selectIn', // Заголовок для историй
  component: selectIn, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { selectIn },
  template: '<selectIn :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { selectIn },
  template: '<selectIn :label="\'Another Text\'" />',
});