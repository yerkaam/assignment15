// Импортируем компонент
import Pagination from '../components/Pagination.vue';

// Экспортируем объект с метаданными
export default {
  title: 'Pagination', // Заголовок для историй
  component: Pagination, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { Pagination },
  template: '<Pagination :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { Pagination },
  template: '<Pagination :label="\'Another Text\'" />',
});