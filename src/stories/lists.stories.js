// Импортируем компонент
import lists from '../components/lists.vue';

// Экспортируем объект с метаданными
export default {
  title: 'lists', // Заголовок для историй
  component: lists, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { lists },
  template: '<lists :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { lists },
  template: '<lists :label="\'Another Text\'" />',
});