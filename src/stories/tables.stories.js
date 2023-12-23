// Импортируем компонент
import tables from '../components/tables.vue';

// Экспортируем объект с метаданными
export default {
  title: 'tables', // Заголовок для историй
  component: tables, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { tables },
  template: '<tables :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { tables },
  template: '<tables :label="\'Another Text\'" />',
});