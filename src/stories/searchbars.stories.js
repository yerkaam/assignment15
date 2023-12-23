// Импортируем компонент
import searchbars from '../components/searchbars.vue';

// Экспортируем объект с метаданными
export default {
  title: 'searchbars', // Заголовок для историй
  component: searchbars, // Компонент, который мы тестируем
};

// История для кнопки с текстом "Привет, мир!"
export const HelloWorld = () => ({
  components: { searchbars },
  template: '<searchbars :label="\'Hello, World!\'" />',
});

// История для кнопки с другим текстом
export const AnotherText = () => ({
  components: { searchbars },
  template: '<searchbars :label="\'Another Text\'" />',
});